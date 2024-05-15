// App.jsx
//import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import ToDoContainer from './components/ToDoContainer';
import HistoryContainer from './components/HistoryContainer';
import SearchContainer from './components/SearchContainer';
import Nav from './components/Nav';

function App() {
  const [todos, setTodos] = useState([]);
  const { page } = useParams();

  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<ToDoContainer todos={todos} setTodos={setTodos} />} />
          <Route path="/history" element={<HistoryContainer todos={todos} />} />
          <Route path="/search" element={<SearchContainer todos={todos} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
