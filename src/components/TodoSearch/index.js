import React from 'react';
import './todoSearch.css'

function TodoSearch({setSearch,getLoading}){

    const onChangeSearch = (event) =>{
        setSearch(event.target.value)
    };

    return(
        <section 
            className="todoSearch__container"  
        >
            <h3 
                className={`todoSearch__title ${!!getLoading && 'todoSearch__title--loading'}`}
            >
                buscar:
            </h3>
            <input 
                className="todoSearch__input" 
                type="text" 
                placeholder="Cebolla"
                onChange={onChangeSearch}
                disabled={!!getLoading}
            />
        </section>
    );
}

export {TodoSearch}