import React, { useContext } from 'react'
import AuthContext from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import IncomingMessage from './IncomingMessage'
import OutgoingMessage from './OutgoingMessage'
import SendMessage from './SendMessage'

const Messages = () => {

    const { chatState } = useContext(ChatContext);
    const { auth } = useContext(AuthContext);

    console.log(chatState.mensajes);

    return (
        <div className="mesgs">
            <div 
                id='mensajes'
                className="msg_history">

                {
                    chatState.mensajes.map( msg => (
                        (msg.para === auth.uid)
                            ? <IncomingMessage msg={msg} key={msg._id} />
                            : <OutgoingMessage msg={msg} key={msg._id}/>
                    ))
                }

               
            </div>

            <SendMessage/>
        </div>
    )
}

export default Messages
