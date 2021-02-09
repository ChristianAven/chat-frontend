import React, { useContext } from 'react';
import AuthContext from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import SideBarItem from './SideBarItem';

const SideBar = () => {

    const {chatState} = useContext(ChatContext)
    const { auth } = useContext(AuthContext);
    console.log(auth.uid);

    const users = chatState.usuarios;

    return (
        <div className="inbox_chat">
            
            {
                users
                    .filter( (user)=>user.uid !== auth.uid )
                    .map((user) =>( 
                    <SideBarItem user={user} key={user.uid} />        
                ))
            }      
            

            {/* <div className="extra_space"></div> */}

        </div>
    )
}

export default SideBar
