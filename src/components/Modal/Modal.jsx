import React from 'react'
import ModalStyled from './Style'

export default function Modal(props) {

    if (props.isOpen)  
    return (
    <ModalStyled>
        <div className='modal'>
            <div className='modal-children'>
            {props.children}
            </div>
        </div >
    </ModalStyled>
    )
    
    

    return null
}

