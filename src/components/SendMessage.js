import React, { useContext, useState } from 'react'
import AuthContext from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/socketContext';

const SendMessage = () => {

    const { socket } = useContext(SocketContext);
    const { auth } = useContext(AuthContext);
    const { chatState } = useContext(ChatContext);
    const [mensaje, setMensaje] = useState('');
    
    const onChange = ({ target }) => {
        setMensaje(target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (mensaje.length === 0) { return; }
        setMensaje('');

        // emitir un evento de socket para enviar un mensaje
        socket.emit( 'mensaje-personal', {
            de: auth.uid,
            para: chatState.chatActivo,
            mensaje
        } )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input value={mensaje} onChange={onChange} type="text" className="write_msg" placeholder="Mensaje..." />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
        
    )
}

export default SendMessage
