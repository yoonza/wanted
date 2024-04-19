import React from "react";
//import axios from "axios";
import TextComponent from "./shared/components/TextComponent";
import simpleHttpRequest from "./network/request";

function App() {

  const [loginInfo, setloginInfo] = React.useState(
    {
      email: "",
      password: "",
    }
  );

  const callLoginApi = async () => {
    // const response = await axios.get("http://localhost:5001/users/0");
    const response = await simpleHttpRequest("GET", "/users/0");

    console.log(response);
    //console.log(response.data); // db.json의 email, password, access_token 출력

    //console.log(response.data.access_token);

    localStorage.setItem("access_token", response.data.access_token);
    // 로그인 후 localStorage에 값을 설정
    localStorage.setItem("email", loginInfo.email);
    // 로그인 후 localStorage에 비밀번호를 저장함.
    localStorage.setItem("password", loginInfo.password);
  }

  const handleLogin = async () => {
    if (loginInfo.password.length >= 4) {
      console.log(loginInfo);
      await callLoginApi();
    } else {
      alert("비밀번호는 4자리 이상이어야 합니다.");
    }
  }

  return (
    <div className="App">
      <div>
        <h3>로그인</h3>
      </div>
      <div>   
        <TextComponent 
          inputType={"text"}
          text ={loginInfo.email}
          changeTextFn={(e) => {
            setloginInfo({
              ...loginInfo,
              email: e.target.value,
            });
          }}/>

          <TextComponent 
          inputType={"password"}
          text ={loginInfo.password}
          changeTextFn={(e) => {
            setloginInfo({
              ...loginInfo,
              password: e.target.value,
            });
          }}
          />
        
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default App;
