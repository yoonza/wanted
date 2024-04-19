import logo from './logo.svg';
import './App.css';
import React from 'react';
import { set } from 'mongoose';

// 상태관리를 해보자!
// 이름을 입력하여 바꾸기라는 버튼을 누르면 바꿔지도록 해보자!

// const Mystore = React.createContext();

// ContextApi 사용하기 
// function App() {
  
//   const [name, setName] = React.useState("dooza"); // provider와 consumer로 바꾸어서 전역 상태 관리 데이터값들로 바꾸어보자 !
//   return (
//     <Mystore.Provider value={{ name, setName }}>
//       <Mystore.Consumer>
//         {(value => {
//           console.log(value);

//           return (
//           <div>
//             {value.name}
//             <button onClick={() => {
//               setName("yoonza");
//             }}>바꾸기</button>
//             </div>
//           )
//         })}
//       </Mystore.Consumer>
//     </Mystore.Provider>
//   );
// }

// export default App;

// Hook 사용하여 간결하게 전역 상태 관리 코드 작성하기 

const Mystore = React.createContext();

const ChildComponent = (props) => {
  const {name, setName} = React.useContext(Mystore);

  console.log(name, setName);
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => {
        setName("yoonza2222");
      }}>바꾸기</button>
    </div>
  )
}
function App() {
  
  const [name, setName] = React.useState("dooza"); // provider와 consumer로 바꾸어서 전역 상태 관리 데이터값들로 바꾸어보자 !
  // const {name, setName} = React.useContext(Mystore); // 변수를 두 번 선언해주었다는 빨간 줄 오류가 발생함. 

  return (
    <Mystore.Provider value={{ name, setName }}>
     <ChildComponent/>
    </Mystore.Provider>
  );
}

export default App;
