// redux/reducers/bucketListReducer.js

const initialState = {
  list: [],
};

const bucketListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: [...state.list, { id: Date.now(), text: action.payload }],
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        list: state.list.map(item =>
          item.id === action.payload.id ? { ...item, text: action.payload.text } : item
        ),
      };
    default:
      return state;
  }
};

export default bucketListReducer;
