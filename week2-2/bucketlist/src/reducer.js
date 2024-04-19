//reducer.js
import { ADD_BUCKET_ITEM, EDIT_BUCKET_ITEM } from './action';

const initialState = {
  bucketList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUCKET_ITEM:
      return {
        ...state,
        bucketList: [...state.bucketList, { id: Date.now(), text: action.payload.text }],
      };
    case EDIT_BUCKET_ITEM:
      return {
        ...state,
        bucketList: state.bucketList.map(item =>
          item.id === action.payload.id ? { ...item, text: action.payload.newText } : item
        ),
      };
    default:
      return state;
  }
};

export default reducer;