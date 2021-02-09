import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../auth/AuthContext';
import Swal from 'sweetalert2'

const LoginPage = () => {

	const {login} = useContext(AuthContext);

	const [form, setForm] = useState({
		email: '',
		password: '',
		rememberMe: true,	
	});

	useEffect(() => {
		const remenberMeEmail = localStorage.getItem('email');
		if( remenberMeEmail ){
			setForm( form => ({
				...form,
				rememberMe: true,
				email: remenberMeEmail,
			}))
		}
	}, [])

	const onChange = ({target}) =>{
		const {name, value} = target;
		setForm({
			...form,
			[name]: value
		});
	};

	const toggleCheck = () => {
		setForm({
			...form,
			rememberMe: !form.rememberMe
		})
	}

	const onSubmit = async (ev) => {
		ev.preventDefault();

		if( form.rememberMe){
			localStorage.setItem('email', form.email);
		}else {
			localStorage.removeItem('email');
		}

		// llamar al backend
		const { email, password } = form;
		const ok = await login(email, password);

		if (!ok) {
			console.log(ok);
			Swal.fire('Error', 'Verifique el usuario y contraseña', "error");
		}
	}

	const todoOk = () => {
		return (form.email.length > 0 && form.password.length > 0 ) ? true : false;
	}

    return (
        <form onSubmit={onSubmit} className="login100-form validate-form flex-sb flex-w">
			<span className="login100-form-title mb-3">
				Chat - Ingreso
			</span>
					
			<div className="wrap-input100 validate-input mb-3">
				<input onChange={onChange} className="input100" value={form.email} type="email" name="email" placeholder="Email" />
				<span className="focus-input100"></span>
			</div>
					
					
			<div className="wrap-input100 validate-input mb-3">
				<input onChange={onChange} value={form.password} className="input100" type="password" name="password" placeholder="Password" />
				<span className="focus-input100"></span>
			</div>
					
			<div className="row mb-3">
				<div onClick={()=> toggleCheck() } className="col">
					<input readOnly checked={form.rememberMe} className="input-checkbox100" id="ckb1" type="checkbox" name="rememberMe" />
					<label className="label-checkbox100">
						¿Recordar cuenta?
					</label>
				</div>

				<div className="col text-right">
					<Link to='/auth/register' className="txt1">
                        ¿No tienes una cuenta?
                    </Link>
				</div>
			</div>

			<div className="container-login100-form-btn m-t-17">
				<button className="login100-form-btn" type='submit' disabled={!todoOk()}>
					Ingresar
				</button>
			</div>

		</form>
    )
}

export default LoginPage
