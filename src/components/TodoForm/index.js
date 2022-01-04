import React from 'react'
import './todoForm.css'

import { TodoContext } from '../../App/todoContext';


function TodoForm(){
    const{
        setModal,
        onAddTodo
    } = React.useContext(TodoContext);

    const [getTextArea,setTextArea] = React.useState('')

    const onChangeTextArea = (event) =>{
        setTextArea(event.target.value);
    }

    const onCancel = () =>{
        setModal(false);
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(getTextArea);
        setModal(false);
    }


    return(
        <form 
            className="form__container"
            onSubmit={onSubmit}
        >
            <label
                className="form__label"
            >
                ¡Crea un TODO!
            </label>

            <textarea
                className="form__textArea"
                type="textarea"
                placeholder="¿Cual será tu proxima tarea?"
                onChange={onChangeTextArea}
            >

            </textarea>    

            <div 
                className="form__divContainer--button"
            >
                <button
                    className="cancelar"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>

        </form>
    );
}

export {TodoForm}