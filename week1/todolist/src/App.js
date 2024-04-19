import React, { useState } from 'react';
import './App.css'; // 스타일 시트를 불러옵니다.

const App = () => {
  const [todos, setTodos] = useState([]); // 할 일 목록을 저장할 상태
  const [newTodo, setNewTodo] = useState(''); // 새로운 할 일을 입력받을 상태

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]); // 새로운 할 일을 할 일 목록에 추가합니다.
      setNewTodo(''); // 입력 창을 초기화합니다.
    }
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2><a href="http://localhost:3001">오늘의 할일</a></h2>
      <div className="container">
        <div className="box-container">
          {todos.map((todo, index) => (
            <div className="box" key={index}>
              <div className="todo-content">{todo}
              <button className='clear' onClick={() => handleCompleteTodo(index)}>완료하기</button></div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;