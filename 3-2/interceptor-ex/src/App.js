import React from 'react';
import instance from "./network/axios";
import styled from "styled-components";

function App() {
  
  const callAPI = async () =>  {
    try{
      // 로딩 스피너를 띄운다
      await instance.get("users");
    }
    catch(e) {
      console.log("에러 발생",e); // 다시 뭔가를 하거나 에러의 후처리를 하자 

      // switch() {
      //   case // 에러에 따른 처리해주자
      // }
        }
    finally{
      console.log("무조건 실행된다."); // async , await을 걸어주면 값이 나온 후 마지막에 문장 실행
    }

  }
  
  React.useEffect(() => {

  callAPI();

  }, []);

  return (
  
    <div className="App">   
    <OutterDiv>
      <InnerDiv></InnerDiv>
    </OutterDiv>
    </div>
  );
}

export default App;

// 스타일 정의 이름 짓는건 직관적으로 설정하기
// 스타일 지정 태그 생성하기 
const OutterDiv = styled.div`
  background:green;
  width: 200px;
  height: 200px;
`;

const InnerDiv = styled.div`
  background: yellow;
  width:100px;
  height:100px;
  border-radius: 50px;
`;

