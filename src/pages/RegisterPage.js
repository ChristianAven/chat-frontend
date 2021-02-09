import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import AuthContext from '../auth/AuthContext';

const RegisterPage = () => {

	const { register } = useContext(AuthContext);


	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',	
	});

	const onChange = ({target}) =>{
		const {name, value} = target;
		setForm({
			...form,
			[name]: value
		});
	};

	const onSubmit = async (ev) => {
		ev.preventDefault();

		// llamar al backend
		const { name, email, password } = form;
		const ok = await register( name, email, password);

		if (!ok) {
			console.log(ok);
			Swal.fire('Error', 'El correo ya existe', "error");
		}
	}

	const todoOk = () => {
		return (form.name.length > 0 && form.email.length > 0 && form.password.length > 0 ) ? true : false;
	}


    return (
        <form onSubmit={onSubmit} className="login100-form validate-form flex-sb flex-w">
			<span className="login100-form-title mb-3">
				Chat - Registro
			</span>

			<div className="wrap-input100 validate-input mb-3">
				<input onChange={onChange} value={form.name} className="input100" type="text" name="name" placeholder="Nombre" />
				<span className="focus-input100"></span>
			</div>
		
			<div className="wrap-input100 validate-input mb-3">
				<input onChange={onChange} value={form.email} className="input100" type="email" name="email" placeholder="Email" />
				<span className="focus-input100"></span>
			</div>
							
			<div className="wrap-input100 validate-input mb-3">
				<input onChange={onChange} value={form.password} className="input100" type="password" name="password" placeholder="Password" />
				<span className="focus-input100"></span>
			</div>
					
			<div className="row mb-3">
				<div className="col text-right">
				    <Link to="/auth/login" className="txt1">
                        ¿Ya tienes una cuenta?
                    </Link>
			    </div>
		    </div>

			<div className="container-login100-form-btn m-t-17">
				<button disabled={!todoOk()} className="login100-form-btn">
					Crear cuenta
				</button>
			</div>

		</form>
    )
}

export default RegisterPage
