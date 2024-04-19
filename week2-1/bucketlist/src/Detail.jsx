import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from './redux/store';
import './Detail.css';

const Detail = () => {
  const { index } = useParams(); // URL에서 인덱스 파라미터를 가져옴
  const dispatch = useDispatch();
  const bucketList = useSelector(state => state.bucketList);
  const itemIndex = parseInt(index, 10); // 문자열을 숫자로 변환

  const [inputText, setInputText] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    setInputText(bucketList[itemIndex] || ''); // 해당 인덱스의 항목을 입력 텍스트에 설정
  }, [bucketList, itemIndex]);

  const handleEditItem = () => {
    dispatch(updateItem(itemIndex, inputText)); // 수정된 내용을 업데이트하는 액션 디스패치
    setIsEdited(true);
  };
  
  useEffect(() => {
    if (isEdited) {
      setInputText('');
      setIsEdited(false);
    }
  }, [isEdited]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="detail-container">
      <h3>{bucketList[itemIndex]}</h3>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleEditItem}>수정하기</button>
      <Link to={`/`} onClick={() => setInputText('')}>뒤로가기</Link> 
    </div>
  );
};

export default Detail;
