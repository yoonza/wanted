// 상태 관리하는 저장소 생성하기 

import {createStore, combineReducers} from "redux";
import cat from "./modules/cat";

const rootReducer = combineReducers({
    cat,

});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//const store = createStore(값을 넣어줘야함.)
const store = createStore(rootReducer);

export default store;

// export default store;

// enhancer는 미들웨어의 묶음이다 !
