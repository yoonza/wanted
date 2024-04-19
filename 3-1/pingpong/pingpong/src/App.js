import React from 'react';
import axios from "axios";

function App() {
  const fetchPing = async () => {
    const res = await fetch("http://localhost:5001/ping",  {
      headers: {"Content-Type": "application/json"},
    });
  
    const data = await res.json();
    console.log(data);
    return data;
  };
  
  const axiosPing = async () => {
    const res = await axios.get("http://localhost:5001/ping",
    {
      headers: { "Content-Type" : "application/json"},
    });
  
    return res;
  }

  return (
    <div className="App">
      <button onClick={fetchPing}>fetch 요청하기</button>
      <button onClick={axiosPing}>axios 요청하기</button>
    </div>
  );
}

export default App;
