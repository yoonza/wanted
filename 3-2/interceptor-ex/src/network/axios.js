// 네트워크 요청을 보내는 axios 객체를 만들자 
import axios from 'axios';
// 1. 요청을 만들자 
// 2. 요청에 넣을 무언가를 넣자 (Headers, base-url) - 필요한 설정을 넣는다 (interceptor 포함)
const instance = axios.create({
    baseURL: "http://localhost:5001/",
    headers: {
        "Content-Type": "application/json",

},

});

instance.interceptors.request.use((config) => {
    console.log(config);
    const _conf = {...config, headers:{
        ...config.headers,
        "Authorization": "test_token_123"
    }};
    
    console.log(_conf);
    return config;
})

instance.interceptors.response.use((config) =>  {
    console.log("response interceptor에서 받아온 값이에요",config);

    return config;
}, (error) => {
    console.log("에러가 났어"); // 에러도 객체라 생성할 수 있다 
    console.log(error);
    
    let my_error = new Error("에러 발생!!!!"); // 에러 생성하기

    return Promise.reject(my_error); // 에러를 리턴해보자
});

export default instance;
