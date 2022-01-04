import React from 'react';

import { TodoContext } from '../../App/todoContext';
import './todoSearch.css'

function TodoSearch(){

    const {
        setSearch
    } = React.useContext(TodoContext)

    const onChangeSearch = (event) =>{
        setSearch(event.target.value)
    };

    return(
        <section 
            className="todoSearch__container"  
        >
            <h3 
                className="todoSearch__title"
            >
                buscar:
            </h3>
            <input 
                className="todoSearch__input" 
                type="text" 
                placeholder="Cebolla"
                onChange={onChangeSearch}
            />
        </section>
    );
}

export {TodoSearch}