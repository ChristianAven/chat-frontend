import React from 'react'
import { horaMes } from '../helpers/horaMes'

const IncomingMessage = ({msg}) => {

    const hoyMes = horaMes(msg.createdAt);

    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{msg.mensaje}</p>
                    <span className="time_date">{hoyMes}</span>
                </div>
            </div>
        </div>
    )
}

export default IncomingMessage
