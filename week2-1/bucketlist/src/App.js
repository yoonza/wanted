import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Detail from './Detail';
import './App.css';

const App = () => {
  const [bucketList, setBucketList] = useState([]);

  const handleAddItem = (newItem) => {
    setBucketList([...bucketList, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    // 수정된 아이템을 업데이트합니다.
    const updatedList = bucketList.map(item => item === updatedItem ? updatedItem : item);
    setBucketList(updatedList);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Main bucketList={bucketList} onAddItem={handleAddItem} />}
          />
          <Route
            path="/detail/:item"
            element={<Detail bucketList={bucketList} onUpdateItem={handleUpdateItem} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

