// 네트워크 요청만 하는 함수 만들기 
// 실무에서는 class 사용하여 interface를 만들어서 사용한다. 
import axios from 'axios';
import React from 'react';
import instance from "./network/axios";

async function simpleHttpRequest(method="GET", url="/", data={}) {

    let response = null;
    let baseURL = 'http://localhost:5001';
    let requestUrl = baseURL + url;

    // // axios 사용하여 요청하기 
    // axios.create({
    //     baseURL: "http://localhost:5001",
    //     timeout: 2000,  // 2초 넘으면 실패 
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // });

    // fetch(url, {

    // })

    if (method== "GET"){
        response =  await axios.get(requestUrl);
    }

    return response;


    // if (method== "POST"){
    //     axios.post(url,data);
    // }

}

export default simpleHttpRequest;

// http 요청을 할 때, 순서 
// xhr

// 1.요청 만들기 
// 어떤 곳으로 어떤 데이터랑 방식으로 보낼지를 알아야함. 
// 2.요청 보내기 
// 3.요청에 대한 응답을 받고 
// 4.후처리하기 