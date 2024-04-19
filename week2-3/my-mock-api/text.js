// 네트워크 요청을 보내기 위해 해야할 것. 

// 1. 보낼 요청 만들어주기 
let xhr = new XMLHttpRequest() 
// 2. 보낼 요청에 어떤 주소, 방식, 데이터를 보낼지 설정해준다.
xhr.open("GET", "http://localhost:5001/sleep_times"); // put,post는 보낼 데이터를 같이 써준다. 

// 3. 응답을 받고 싶은 방법을 알려준다. 
// xhr.onload(() => {
//     console.log('here');
// }); // 응답을 받았을 때, 요청할 일
// onload()와 
xhr.onreadystatechange = function(e) {
    console.log(xhr.responseText);
    if (xhr.readyState === 4 ){
        console.log(xhr.readyState);
        console.log(xhr.responseText); // 오류가 났을 수도 있으니, 상태코드를 다르게 한다. 
        // 200은 정상 상태, 500은 서버 오류, 404 서버오류
    }
} // 순서에서 호출한 함수들을 각 단계별로 콘솔창을 찍어준다.

// 4. 응답을 어떻게 처리할지 알려준다. 
xhr.send() // 요청 보내기 

console.log(xhr);

// async / await / promise - 반환되지 않는다 (xmlhttprequest)
// callback : 작업 중인 할일을 끝내고 다음에 할일을 알려줌.(약간의 명령)
// 콜백지옥(callback-hell) : 콜백 내에 여러번의 콜백이 있는것 (코드 관리가 힘들게 함.) -> 콜백지옥을 없애기 위해서 promise의 등장 
// promise - 비동기 작업의 성공/실패에 대하여 작업을 수행하도록 함.(각각의 상황에 따라 정해준 행동을 해라.)