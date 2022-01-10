import React from 'react';
import './todoList.css';

function TodoList(props){

    const renderF = props.render || props.children

    return(
        <section className="todoList__container">
            {props.getError && props.onError()}
            {props.getLoading && props.onLoading()}
            {(!props.getLoading && !props.searchTodos.length && !props.getSearch) && props.onClean()}
            {(props.getSearch && !props.searchTodos.length) && props.onSearch()}
            {props.getLoading && props.searchTodos.map(renderF)}
        </section>
    );
}

export {TodoList};