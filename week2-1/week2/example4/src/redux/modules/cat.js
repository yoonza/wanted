// cat이라는 모듈을 만들고 값과, 바꿀 값을 넣어준다. 

// 초기 상태를 선언한다. 
const initialState = {
    cat_arr: [],
};

// 값이 존재하면 바꾸는 무엇인가도 함께 있어야 한다. (aciton)
// action을 생성하자.
// aciton을 생성할 경우, action type과 값의 바뀌는 결과를 알려줘야한다. 

export const getCatArr = (cat) => {
    return {
        type : "GET",
        cat : cat
    };
};

export const addCat = (cat) =>  {
    return {
        type : "ADD",
        cat : cat
    };
};

// reducer는 function
export default function reducer(state = initialState, action) {
    // 각각 어떤 일이 일어나는지 알려주자 !
    switch (action.type) {
        case "GET":
            return state;
        case "ADD":
            console.log(state);
            console.log(action);
            //return {...state, cat_arr: []};
    }
}