import React from 'react'

function useLocalStorage (item,tipo){
    //localStorage
    const [getTodos, setTodos] = React.useState(tipo);
    const [getLoading, setLoading] = React.useState(true);
    const [getError, setError] = React.useState(false);

    React.useEffect(() =>{
      setTimeout(()=>{

        try{
          const appLocalStorage = localStorage.getItem(item);
          let parsedTodos = tipo;
        
          if(!appLocalStorage){
            localStorage.setItem(item, JSON.stringify(tipo));
          }else{
            parsedTodos = JSON.parse(appLocalStorage);
          }
  
          setTodos(parsedTodos);
          setLoading(false);  
          
        }catch(error){
          setError(error)
        }
      },1000);
    },[]);
    
    const saveApp = (newTodo) =>{
      localStorage.setItem(item, JSON.stringify(newTodo));
      setTodos(newTodo);
    }

    return({
      getTodos,
      getLoading,
      getError,
      saveApp,
    })
}

export {useLocalStorage}