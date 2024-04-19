import { createStore } from 'redux';

// 액션 타입 정의
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

// 액션 생성자 함수
export const updateItem = (index, newItem) => ({
  type: UPDATE_ITEM,
  payload: { index, newItem },
});

// 액션 생성자 함수
export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  payload: index,
});

// 초기 상태 정의
const initialState = {
  bucketList: [],
};

// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM:
      const { index, newItem } = action.payload;
      const updatedBucketList = [...state.bucketList];
      updatedBucketList[index] = newItem;
      return {
        ...state,
        bucketList: updatedBucketList,
      };
    case DELETE_ITEM:
      return {
        ...state,
        bucketList: state.bucketList.filter((_, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
