import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'This is first text',
      checked: true,
    },
    {
      id: 2,
      text: 'This is second text',
      checked: true,
    },
    {
      id: 3,
      text: 'This is third text',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
