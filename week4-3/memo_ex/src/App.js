import React from 'react';

const MemoComponent = ({a,b,c}) => {
  console.log(a,b,c);

  const add = (a,b) => {
    console.log('add 함수 호출');
    return a+b;
  }

  const memorizedValue = React.useMemo(() => add(a,b), [a,b]);
  return (
    <div>
      <h1>메모 컴포넌트</h1>
      <p>숫자들 : {a}/ {b}/ {c}</p>
      <p>더한 값: {memorizedValue} </p>
    </div>
  )
}
function App() {
  const [numbers, setNumbers] = React.useState({
    a: 0,
    b: 1,
    c: 2,
  });

  return (
    <div className="App">
      <MemoComponent a={numbers.a} b={numbers.b} c={numbers.c}/>
      <button onClick={()=> {
        setNumbers({...numbers, a:numbers.a+1, b:numbers.b+1});
      }}>a,b를 변경해</button>
      <button onClick={() => {
        setNumbers({...numbers, c:numbers.c+1});
      }}>c를 변경해</button>
    </div>
  );
}

export default App;
