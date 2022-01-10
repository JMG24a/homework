import React from "react";
import './todoCounter.css';

function TodoCounter({completed,total,getLoading}){
    return(
        <h2 className={`todoCounter__title ${!!getLoading && 'todoCounter__title--loading'}`}>
            Has completado {completed} de {total} TODOs
        </h2>
    );
}

export {TodoCounter};