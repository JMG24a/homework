import React from 'react'
import { useLocalStorage } from './useLocalStorage';


function useTodoTools(){

  const [getSearch,setSearch] = React.useState('');
  const [getModal,setModal] = React.useState(false);
  const {
      getTodos: getLocal,
      saveApp: setLocal,
      getLoading,
      getError,
      sincronized,
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

    return({
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
        onAddTodo,
    });
}

export { useTodoTools }