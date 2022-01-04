import React from 'react';
import './todoList.css';

function TodoList(props){
    return(
        <section className="todoList__container">
            <ul className="todoList__ul">
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};