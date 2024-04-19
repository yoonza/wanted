import React from 'react';
import add from './calculator';

function App() {
  return (
    <div className="App">
      Learn React
      {add(1, 2)}
    </div>
  );
}

export default App;

