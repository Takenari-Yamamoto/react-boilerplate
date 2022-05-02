import React from 'react';
import { Todo } from './model';
import { SingleTodo } from './SingleTodo';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  // handleAdd: (e: React.FormEvent) => void;
}

export const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
