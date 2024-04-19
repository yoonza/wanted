import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem, deleteItem } from './redux/store'; // deleteItem 추가
import './Main.css';

const Main = () => {
  const bucketList = useSelector(state => state.bucketList);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [completedItems, setCompletedItems] = useState([]); // 완료된 항목의 인덱스를 저장하는 상태 추가

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      dispatch(updateItem(bucketList.length, inputValue.trim()));
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
    // 완료된 항목이 삭제되면 completedItems에서 해당 인덱스 제거
    setCompletedItems(completedItems.filter(itemIndex => itemIndex !== index));
  };

  const handleComplete = (index) => {
    // 완료 버튼을 누르면 해당 항목의 완료 여부를 토글하고 completedItems에 인덱스 추가 또는 제거
    if (completedItems.includes(index)) {
      setCompletedItems(completedItems.filter(itemIndex => itemIndex !== index));
    } else {
      setCompletedItems([...completedItems, index]);
    }
  };

  return (
    <>
      <div className="bucket-list-container">
        <h1>내 버킷리스트</h1>
        <hr/>
        {bucketList.map((item, index) => (
          <div key={index} className={`bucket-item-box ${completedItems.includes(index) ? 'completed' : ''}`}>
            <Link to={`/detail/${encodeURIComponent(index)}`}>
              <p>{item}</p>
            </Link>
            <button style={{ backgroundColor: 'limegreen' }} onClick={() => handleComplete(index)}>완료</button>
            <button onClick={() => handleDelete(index)}>삭제</button>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleAdd}>추가하기</button>
      </div>
    </>
  );
};

export default Main;
