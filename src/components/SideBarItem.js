import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import userPic from '../img/user.png';
import { types } from '../types/types';
import {fetchConToken} from '../helpers/fetch'
import { scrollToBotton } from '../helpers/scrollTobottom';

//active_chat
const SideBarItem = ({user}) => {

    const { chatState ,dispatch } = useContext( ChatContext )
    const { chatActivo } = chatState;

    const activarChat = async() => {

        dispatch({
            type: types.activarChat,
            payload:  user.uid
        })

        // cargar los mensajes del chat
        const resp = await fetchConToken(`mensajes/${ user.uid }`);
        console.log(resp);

        dispatch({
            type: types.cargarChat,
            payload: resp.mensajes
        });

        scrollToBotton('mensajes')
    }

    return (
        <div onClick={ activarChat } className={`chat_list ${ chatActivo === user.uid && 'active_chat' }`}>
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src={userPic} alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{ user.nombre }</h5>
                    {
                        (user.online === 'false')
                        ? <span className="text-danger">Offline</span>
                        : <span className="text-success">Online</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBarItem
