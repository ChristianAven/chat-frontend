import React from 'react'
import { horaMes } from '../helpers/horaMes'

const OutgoingMessage = ({msg}) => {

    const hoyMes = horaMes(msg.createdAt);

    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{msg.mensaje}</p>
                <span className="time_date"> {hoyMes}</span>
            </div>
        </div>
    )
}

export default OutgoingMessage
