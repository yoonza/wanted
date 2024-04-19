import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCat } from "./redux/modules/cat";

// const Cat = () => {
//   const cat_arr = useSelector((state) => state.cat.cat_arr); // 필요한 부분만 선택하도록 수정

//   return (
//     <div>
//       <h1>고양이</h1>
//       {cat_arr.map((cat, index) => (
//         <p key={index}>{cat}</p>
//       ))}
//     </div>
//   );
// };

const Cat = () => {
    const cat_arr = useSelector((state) = state.cat.cat_arr);

    return (
        <div> 
            <h1>고양이</h1>
    )
}

const Dog = () => {
  const Dog = useSelector(((state)=> state.Dog));

  return (
    <div>
      <h1>강아지</h1>
      {dog_arr.map((dog, index) => {
        return <p key={index}>{name}</p>;
})}
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>홈</h1>
      {<button
        onClick={() => {
          dispatch(addDog("해피"));
        }}
      >
        강아지 추가
      </button> }
    </div>
  );
};

export { Cat, Dog, Home };
