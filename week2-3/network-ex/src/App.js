//import React from 'react';



function App() {
    React.useEffect(() => {
        const axiosTest = async() => {
          let data = axios({
            method:"get",
            url:"http://localhost:5001/sleep_times",
            headers: {
              "Content-Type": "application/json",
            },
        });
        console.log(data);
        }

        axiosTest();
    
    }, []);

    return <div className="App">{}</div>
}
export default App; 
// function App() {

//   React.useEffect(()=> {
//     // fetch 사용하기 
//     const getSleepData = async () => {
//       let data = await fetch (
//         "http://localhost:5001/sleep_times"
//       );
    

//     console.log(data);
//     return data;
// } 

//   const addSleepData = async (sleep_data) => {
//     let data = await fetch ("http://localhost:5001/sleep_times", 
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(sleep_data),
//     });

//     console.log(data);
//   }

//   addSleepData({
//     day: "목",
//   });


// // promise 사용하기 
// //     // const promise1 = new Promise(성공했니? 했으면 이걸 해라, 실패했니? 실패하면 이걸 해라);
// //     const promise1= function (param) {
// //      let a = new Promise(function(resolve, reject) {

// //       console.log("in promise1");

// //       if(param) {
// //         window.setTimeout(function() {
// //           resolve("success");
// //       }, 10000);
// //     }
// //       else {
// //         reject("fail");
// //       }

// //       console.log("out promise1");

     
// //   });
// //     console.log(a);

// //     return a;
// // }

// // // 후속처리 메서드
// // promise1(true).then(() =>  {
// //   console.log("I AM HERE");
// // }).catch(() => {
// //   console.log();
// // })

// // promise1(false).then(() =>  {
// //   console.log("I AM HERE");
// // }).catch(() => {
// //   console.log();
// // })

// // aysnc, await 사용하기 = 얘는 둘이서 같이 써야돼용. 
// // async function a() {}

// // await a();


//   }, []);


//   return (
//     <div className="App">
//       <h1>하이</h1>
//     </div>
//   );
// }

// export default App;

// // 오류가 났을 때는 catch()로 오류의 위치 파악 가능