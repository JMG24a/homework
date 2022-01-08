import React from 'react';
import ReactDOM from 'react-dom';
import './todoModal.css'

function Modal(props){

    return ReactDOM.createPortal(
        
        <div className='modal__containder'>
            {props.children}
        </div>,

        document.getElementById('modal')
    );
}

export { Modal }