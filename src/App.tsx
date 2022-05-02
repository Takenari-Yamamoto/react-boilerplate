import React, { useState } from 'react';
import './App.css';
import { InputField } from '../src/InputField';
import { Todo } from './model';
import { TodoList } from './TodoList';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo,
        isDone: false,
      },
    ]);
    setTodo('');
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
