import React from 'react'
import Slide from './slider'
import './style.scss'
function CliensSay() {
    return (
        <div className="clientsSay">
            <div className="leftSide">
                <div className='header'>CLIENTS SAYS</div>
                <div className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel qui veniam labore dolorem itaque.
                </div>
            </div>
            <div className="rightSide">
                <div className="slide">
                    <Slide />
                </div>
            </div>
        </div>
    )
}

export default CliensSay