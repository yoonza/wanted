import React from "react";
import './App.css';
import { Dog, Home } from "./Component";
import {useSelector, useDispatch} from "react-redux";
import { addCat } from "./redux/modules/cat";

// 갖다쓰는 훅 : useSelector
// 변경 요청 보내는 훅: useDispatch
function App() {

  const [a,setA] = React.useState(0);

  const myStoreData = useSelector((state) => state);

  const dispatch = useDispatch();

  // let a = 1;
  return (
    <div className="App">
      <h1>{a}</h1> 
      {/* <button onClick={ () => {
        dispatch(
          addCat("펄이2")
        );
      }}>추가하자</button> */}
      <Home setA={setA}/>
      //<Cat a={a}/>
      <Dog/>
    </div>
  );
}

export default App;
