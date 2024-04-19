// actions.js
export const ADD_BUCKET_ITEM = 'ADD_BUCKET_ITEM';
export const EDIT_BUCKET_ITEM = 'EDIT_BUCKET_ITEM';

export const addBucketItem = (text) => ({
  type: ADD_BUCKET_ITEM,
  payload: {
    text,
  },
});

export const editBucketItem = (id, newText) => ({
  type: EDIT_BUCKET_ITEM,
  payload: {
    id,
    newText,
  },
});