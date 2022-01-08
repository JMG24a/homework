import React from 'react';
import './todoButton.css'

function TodoButton({setModal}){

    const onAdd = () =>{
        setModal(true);
    }

    return(
        <button 
            className="todo_Button" 
            type="button"
            onClick={onAdd}
        >
        +
        </button>
    );
}

export { TodoButton }