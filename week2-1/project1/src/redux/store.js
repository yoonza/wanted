// 스토어란 ? 전역저장소인데, 값과 바꿔주는 리듀서로 구성되어 있다!!
import {createStore, combineReducers}  from "redux";
// import cat from "./modules/cat";
import dog from "./slices/dog";

// 리듀서를 하나로 묶어주는 rootReducer
// const rootReducer = combineReducers({cat : cat,});

// const store = createStore(rootReducer);

// export default store;

import cat from "./slices/cat";

const rootReducer = combineReducers({
    dog:dog,
    cat:cat,
    
});

const store = configureStore({reducer: rootReducer});

export default store;