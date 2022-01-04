import React from 'react';
import './todoItem.css'

function TodoItem(props){

    return(
        <li 
            className="card__item"
        >
            <span 
                className={`todoItem__check ${props.completed && 'todoItem__check--active'}`}
                onClick={props.onCompleteTodo}
            >  
                √
            </span>

            <p 
                className={`todoItem__description ${props.completed && 'todoItem__description--active'}`}
            >
                {props.text}
            </p>

            <span 
                className="todoItem__delete"
                onClick={props.onDeleteTodo}
            >
                X
            </span>
        </li>
    );
}

export {TodoItem}