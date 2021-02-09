import { createContext, useReducer } from "react";
import React from 'react'
import { chatReducer } from "./chatReducer";


export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, // uid del usuario al que yo quiero enviar mensajes
    usuarios: [], // Todos los usuarios de la base de datos
    mensajes: [], // El chat seleccionados
}


const ChatProvider = ({ children }) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState);


    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            { children }
        </ChatContext.Provider>
    )
}

export default ChatProvider
