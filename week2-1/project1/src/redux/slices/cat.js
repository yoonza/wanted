// 슬라이스의 구성 요소: 슬라이스의 이름과 초기 상태(=데이터), 슬라이스가 가지고 있는 데이터를 바꾸는 방법
import {createSlice} from "@reduxjs/toolkit";

const catSlice = createSlice{
    {
        name:"cat",
        initialState: {
            cat_arr: ["펄이","루비"],
        },
        reducers: {
            accCat: (state, action)  =>  {
                state.cat_arr.push(action.payload);
            },
    }

};

export const {addCat} = catSlice.actions;

export default catSlice.reducer;