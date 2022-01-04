import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

  const [getSearch,setSearch] = React.useState('');
  const [getModal,setModal] = React.useState(false);
  const {
        getTodos: getLocal,
        saveApp: setLocal,
        getLoading: getLoading,
        getError: getError
    } = useLocalStorage('Todo_v1', []);
  
  //todoCounter
  const completed = getLocal.filter(todo => !!todo.completed).length;
  const total = getLocal.length

  //todoSearch
  let searchTodos = []

  if(getSearch.length < 1){
    searchTodos = getLocal;
  }else{
    searchTodos = getLocal.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = getSearch.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  //todoItem
  const onCompleteTodo = (text) =>{
    const index = getLocal.findIndex(todo => todo.text === text);
    const newTodos = [...getLocal];
    newTodos[index].completed = true;
    setLocal(newTodos);
  }

  const onDeleteTodo = (text) =>{
    const index = getLocal.findIndex(todo => todo.text === text);
    const newTodo = [...getLocal];
    newTodo.splice(index,1);
    setLocal(newTodo);
  }

  //buttonTodo
  const onAddTodo = (text) =>{
    const newTodo = [...getLocal];
    const Todo = {
      text: text,
      completed: false,
    }
    newTodo.push(Todo);
    setLocal(newTodo);
  }

    return(
        <TodoContext.Provider value={{
            completed,
            total,
            getLocal,
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
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoProvider,TodoContext }