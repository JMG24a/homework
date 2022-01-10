import React from 'react';
import { useTodoTools } from './todoContext/useTodoTools';

import { TodoHeader } from '../components/TodoHeader'
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoButton } from '../components/TodoButton';
import { Modal } from './TodoModal'
import { TodoForm } from '../components/TodoForm';
import { ListenerNotificationWithStorageListener } from '../components/ListenerNotification';

//App component
function App() {
  const{
    completed,
    total,
    sincronized,
    getSearch,
    setSearch,
    searchTodos,
    getLoading,
    getError,
    getModal,
    setModal,
    onCompleteTodo,
    onDeleteTodo,
    onAddTodo
  } = useTodoTools();

  return (
    <React.Fragment>
        <TodoHeader
          getLoading={getLoading}
        >
          <TodoCounter
            completed={completed}
            total={total}
          />

          <TodoSearch
            setSearch={setSearch}
          />
        </TodoHeader>

        <TodoList
          getError={getError}
          getLoading={getLoading}
          getSearch={getSearch}
          searchTodos={searchTodos}
          onError={()=> <p>ocurrio un error</p>}
          onLoading={()=> <p>cargando...</p>}
          onError={()=> <p>ocurrio un error</p>}
          onClean={()=> <p>Crea un TODO</p>}
          onSearch={()=> <p>No hay coincidencias con {getSearch}</p>}
          render={
            todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleteTodo={()=>{onCompleteTodo(todo.text)}}
                onDeleteTodo={()=>{onDeleteTodo(todo.text)}}
              />
            )} 
        >
          {/*{todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCompleteTodo={()=>{onCompleteTodo(todo.text)}}
              onDeleteTodo={()=>{onDeleteTodo(todo.text)}}
            />
          )}*/}
        </TodoList>


      <TodoButton
        setModal={setModal}
      />

      {!!getModal && 
        <Modal>
          <TodoForm
            onAddTodo={onAddTodo}
            setModal={setModal}
          />
        </Modal>
      }
      <ListenerNotificationWithStorageListener
        sincronized={sincronized}
      />
      
    </React.Fragment>
  );
}

export default App;
