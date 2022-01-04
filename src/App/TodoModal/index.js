import React from 'react';
import ReactDOM from 'react-dom';

import { TodoForm } from '../../components/TodoForm';


import './todoModal.css'

function Modal(){

    return ReactDOM.createPortal(
        
        <div className='modal__containder'>
            <TodoForm/>
        </div>,

        document.getElementById('modal')
    );
}

export { Modal }