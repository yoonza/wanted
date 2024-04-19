// redux/actions.js

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};

export const updateItem = (id, text) => {
  return {
    type: 'UPDATE_ITEM',
    payload: { id, text },
  };
};
