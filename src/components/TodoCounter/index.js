import React from "react";
import { TodoContext } from "../../App/todoContext";
import './todoCounter.css';

function TodoCounter(){
    const {
        completed,
        total
    } = React.useContext(TodoContext)
    return(
        <h2 className="todoCounter__title">
            Has completado {completed} de {total} TODOs
        </h2>
    );
}

export {TodoCounter};