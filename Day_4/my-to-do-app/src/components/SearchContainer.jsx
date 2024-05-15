// SearchContainer.jsx
import React, { useState } from 'react';

function SearchContainer({ todos }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredTodos = todos.filter(todo => todo.includes(searchText));

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search tasks..."
      />
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
        {filteredTodos.length === 0 && <li>No matching tasks found</li>}
      </ul>
    </div>
  );
}

export default SearchContainer;
