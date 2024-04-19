import React from 'react';
import './App.css';

import Cat from "./Cat";
import Home from "./Home";
import Dog from "./Dog";
function App() {
  return (
    <div className="App">
      <Home/>
      <Cat/>
      <Dog/>
    </div>
  );
}

export default App;
