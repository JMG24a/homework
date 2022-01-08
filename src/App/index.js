import React from 'react';
import { useTodoTools } from './todoContext/useTodoTools';

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
    getLocal,
    Sincronized,
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
        <TodoCounter
          completed={completed}
          total={total}
        />

        <TodoSearch
          setSearch={setSearch}
        />

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
        Sincronized={Sincronized}
      />
      
    </React.Fragment>
  );
}

export default App;
