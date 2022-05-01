import React from 'react';

type Task = {
  text: string;
  completed: boolean;
};

type Props = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TodoList: React.VFC<Props> = ({ taskList, setTaskList }) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task, index) => index !== id));
  };

  const handleCompleted = (id: number) => {
    setTaskList(
      taskList.map((task, index) => {
        if (id === index) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index: number) => (
          <div
            key={index}
            className={`todo ${task.completed ? 'completed' : ''}`}
          >
            <p>{task.text}</p>
            <button onClick={() => handleCompleted(index)}>おしまい</button>
            <button onClick={() => handleDelete(index)}>ごみばこ</button>
          </div>
        ))}
      </div>
    </div>
  );
};
