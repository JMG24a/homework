import React from 'react';
import { TodoContext } from '../../App/todoContext';
import './todoButton.css'

function TodoButton(props){
    const{
        setModal
    } = React.useContext(TodoContext);

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