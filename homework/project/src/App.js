import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/issue/:id" element={<IssueDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

