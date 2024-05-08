import React from 'react'

export default function Modal(props) {

    if (props.isOpen)  
    return ( 
    <div>{props.children}</div>
    )

    return null
}

