import React, { useState } from 'react';
import logo from './logo.svg';
import { InputField } from '../src/InputField';
import { Todo } from './model';

const App: React.FC = () => {
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
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
