import { createSlice } from "@reduxjs/toolkit";

const dogSlice = createSlice({
  name: "dog", // slice의 이름
  initialState: { dog_arr: ["바둑이", "뽀삐"] }, // 초기 상태
  reducers: {
    addDog: (state, action) => {
      // 불변성을 유지하기 위해 immer 라이브러리를 사용
      state.dog_arr.push(action.payload);
    },
  },
});

// reducer를 export
export const { addDog } = dogSlice.actions;

export default dogSlice.reducer;
