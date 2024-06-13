import React from 'react'
import ModalStyled from './Style'
import { BiX } from 'react-icons/bi'

export default function Modal(props) {

    if (props.isOpen)  
    return (
    <ModalStyled>
            <div className='modal'>
                <button className="close" onClick={props.onClose}><BiX/></button>
            {props.children}
            </div>
    </ModalStyled>
    )
    
    

    return null
}

