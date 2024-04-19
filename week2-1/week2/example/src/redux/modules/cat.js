import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cat_arr : [],

};

// immer: payload 발생 - .payload의 값으로 들어옴. 
const catSlice = createSlice({
    name : "CAT",
    initialState,
    reducers: {
        addCat: (state, action) =>  {
            state.cat_arr.push(action.payload);
        }
    }
});

export const {addCat} = catSlice.actions;
export default catSlice.reducer;

// 값이 있으면 값을 바꿔주는 액션을 만들어야함. 
// action type과 
/*export const getCatArr = (cat) => {
    return {
        type : "GET", cat};
};

export const addCat = (cat) =>  {
    return {
        type: "ADD",
        cat,
    };
};

export default function reducer(state = initialState, action = {}) {
    
    switch (action.type) {
        case "GET":
            return state; // 상태값을 그대로 돌려줌

        case "ADD":
            console.log(state);
            console.log(action);
            return {...state, cat_arr: [...state.cat_arr, action.cat]};
            // reducer는 순수함수 !
            // 바깥의 값을 변경하면 안됨
        default:
            return state;
    }

}*/