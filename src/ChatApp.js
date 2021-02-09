import React from 'react'
import { AuthProvider } from './auth/AuthContext'
import ChatProvider from './context/chat/ChatContext'
import AppRouter from './routers/AppRouter'
import { SocketProvider } from './context/socketContext'

import moment from "moment";
import 'moment/locale/es';
moment.locale('es');

const ChatApp = () => {
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRouter/>
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    )
}

export default ChatApp
