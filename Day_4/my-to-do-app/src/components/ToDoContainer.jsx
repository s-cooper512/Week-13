import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import ListComponent from './ListComponent';

function ToDoContainer() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <ButtonComponent onClick={handleAddTodo} color="green">Add</ButtonComponent>
      <ButtonComponent onClick={handleClearTodos} color="red">Clear All</ButtonComponent>
      <ListComponent todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default ToDoContainer;
