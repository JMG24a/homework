import React from "react";

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoButton } from '../components/TodoButton';
import { TodoContext } from './todoContext';
import { Modal } from './TodoModal'

function AppUI(){
  const {            
    searchTodos,
    onCompleteTodo,
    onDeleteTodo,
    onAddTodo,
    getLoading,
    getError,
    getSearch,
    getLocal,
    getModal
  } = React.useContext(TodoContext);

    return(
      <React.Fragment>
        <TodoCounter/>

        <TodoSearch/>

        <TodoList>
          {getError && <p>ocurrio un error</p>}
          {getLoading && <p>Cargando...</p>}
          {(!getLoading && !getLocal.length && !getSearch)&&<p>Crea tu primer TODO</p>}
          {getSearch && <p>Buscando...</p>}
          {searchTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text} 
              completed={todo.completed}
              onCompleteTodo={()=>{onCompleteTodo(todo.text)}}
              onDeleteTodo={()=>{onDeleteTodo(todo.text)}}
          />
        ))}
      </TodoList>


      <TodoButton/>

      {!!getModal && <Modal/>}
      
    </React.Fragment>
  );
}

export { AppUI };