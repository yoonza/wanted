// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import BucketList from './Bucketlist'; // 수정된 부분: BucketList 컴포넌트 import
import './App.css';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Bucket List</h1>
        <BucketList /> {/* 수정된 부분: BucketList 컴포넌트 사용 */}
      </div>
    </Provider>
  );
};

export default App;
