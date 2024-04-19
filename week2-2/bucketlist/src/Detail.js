//Detail.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editBucketItem } from './action';

const Detail = ({ selectedItem, editBucketItem, goBack }) => {
  const [inputText, setInputText] = useState(selectedItem.text);

  const handleEditItem = () => {
    if (inputText.trim() !== '') {
      editBucketItem(selectedItem.id, inputText);
    }
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleEditItem}>수정하기</button>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedItem: state.selectedItem,
});

const mapDispatchToProps = {
  editBucketItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);