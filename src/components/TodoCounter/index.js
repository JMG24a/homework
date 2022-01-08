import React from "react";
import './todoCounter.css';

function TodoCounter({completed,total}){
    return(
        <h2 className="todoCounter__title">
            Has completado {completed} de {total} TODOs
        </h2>
    );
}

export {TodoCounter};