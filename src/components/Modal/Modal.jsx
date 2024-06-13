import React, { useEffect } from 'react';
import ModalStyled from './Style';
import { BiX } from 'react-icons/bi';

export default function Modal(props) {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore the original overflow style
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.isOpen]);

  if (!props.isOpen) {
    return null;
  }

  return (
    <ModalStyled>
      <div className="modal">
        <button className="close" onClick={props.onClose}><BiX /></button>
        {props.children}
      </div>
    </ModalStyled>
  );
}