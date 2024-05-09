import React from 'react';

function ListComponent({ todos, onRemoveTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => onRemoveTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;
