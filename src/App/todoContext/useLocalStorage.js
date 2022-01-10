import React from 'react'

function useLocalStorage (item,tipo){
    //localStorage
    //const [getTodos, setTodos] = React.useState(tipo);
    //const [getLoading, setLoading] = React.useState(true);
    //const [getError, setError] = React.useState(false);
    //const [getSincronized,setSincronized] = React.useState(true);
/*
    const initialState = {
      getTodos: tipo,
      getLoading: true,
      getError: false,
      getSincronized: true,
    }*/

    const [getState, setState] = React.useState({
      getTodos: iten,
      getLoading: true,
      getError: false,
      getSincronized: true
    })

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
          setState({
            ...getState,
            getLoading: false,
            getSincronized: true,
            getTodos: parsedTodos
          })
          /*
          setTodos(parsedTodos);
          setLoading(false); 
          setSincronized(true);
          */
          
        }catch(error){
          setState({
            ...getState,
            getError: error
          })
          //setError(error)
        }
      },1000);
    },[getState.getSincronized]);
    
    const saveApp = (newTodo) =>{
      localStorage.setItem(item, JSON.stringify(newTodo));
      setState({
        ...getState,
        getTodos: newTodo
      })
      //setTodos(newTodo);
    }

    const sincronized = () =>{
      setState({
        getLoading: true,
        getSincronized: false
      })
      //setLoading(true);
      //setSincronized(false);
    }

    return({
      getTodos,
      getLoading,
      getError,
      saveApp,
      sincronized,
    })
}

export {useLocalStorage}