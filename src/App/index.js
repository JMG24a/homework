import { AppUI } from './AppUI';
import { TodoProvider } from './todoContext';

import React from 'react';


//App component
function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
