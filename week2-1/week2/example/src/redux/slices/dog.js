import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const initialState = {
    dog_arr: [],

};
// toolkit은 immer을 내장함. 
// 리듀서는 순수함수여야 하니까 state가 바뀌면 안된다. 
const dogSlice = createSlice({
    name:"DOG",
    initialState:initialState,
    reducers:
    {
        addDog: (state, action) => {
            state.dog_arr.push(action.payload);
        }
    },
}
);

export const {addDog} = dogSlice.actions;
export default dogSlice.reducer;