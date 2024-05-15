// HistoryContainer.jsx
import React from 'react';

function HistoryContainer({ todos }) {
  return (
    <div className="history-container">
      <h2>History</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryContainer;
