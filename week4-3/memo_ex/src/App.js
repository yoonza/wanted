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
};

// 컴포넌트 트리구조
const ParentsComponent = () => {
  const [name, setName] = React.useState('perl');

  console.log('ParentsComponent 렌더링');
  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <ChildOne name={name}/>
      <ChildTwo/>
      <ChildThree/>

      <p>{name}</p>

      <button onClick={() => {
        setName(name+'a');
      }}>이름 바꾸기</button>
    </div>
 );
}

const ChildOne = (name) => {
  console.log('ChildOne 렌더링');
  return (
    <div>
      <h1>자식1 컴포넌트</h1>
    </div>
  );
}

const ChildTwo = React.memo(() => { // React.memo(함수 내용)
  console.log('ChildTwo 렌더링');
  return (
    <div>
      <h1>자식2 컴포넌트</h1>
    </div>
  );
})

const ChildThree = () => {
  console.log('ChildThree 렌더링');
  return (
    <div>
      <h1>자식3 컴포넌트</h1>
    </div>
  );
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

      <hr/>

      <ParentsComponent/>
    </div>
  );
}

export default App;
