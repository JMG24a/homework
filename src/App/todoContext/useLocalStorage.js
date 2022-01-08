import React from 'react'

function useLocalStorage (item,tipo){
    //localStorage
    const [getTodos, setTodos] = React.useState(tipo);
    const [getLoading, setLoading] = React.useState(true);
    const [getError, setError] = React.useState(false);
    const [getSincronized,setSincronized] = React.useState(true);

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
          setSincronized(true) 
          
        }catch(error){
          setError(error)
        }
      },1000);
    },[getSincronized]);
    
    const saveApp = (newTodo) =>{
      localStorage.setItem(item, JSON.stringify(newTodo));
      setTodos(newTodo);
    }

    const Sincronized = () =>{
      setLoading(true)
      setSincronized(false)
    }

    return({
      getTodos,
      getLoading,
      getError,
      saveApp,
      Sincronized,
    })
}

export {useLocalStorage}