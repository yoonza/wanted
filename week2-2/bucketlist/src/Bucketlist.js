import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBucketItem } from './action';
import './Bucket.css'; // CSS 파일 import

const BucketList = ({ bucketList, addBucketItem }) => {
  const [inputText, setInputText] = useState('');

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      addBucketItem(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <div>
        <ul>
          {bucketList.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
      <div>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      </div>
      <div>
        <button onClick={handleAddItem}>추가하기</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bucketList: state.bucketList,
});

const mapDispatchToProps = {
  addBucketItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
