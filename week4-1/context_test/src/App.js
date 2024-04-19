import React from 'react';
import Cat from './components/Cat';
import Dog from './components/Dog';
import MyStore from './store/store';
function App() {

  const [name, setName] = React.useState('이름의 기본값');
  return (
    /* 스토어는 name이라는 데이터를 가지고 있고, 각 자식요소가 바꿀 수 있게 하자.  */
    <div className="App">
      <MyStore.Provider value = {{name,setName}}>
        <Cat/>
        <Dog/>
      </MyStore.Provider>
    </div>
  );
}

export default App;
