import React, { useState } from 'react';

type Task = {
  text: string;
  completed: boolean;
};

type Props = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const InputForm: React.VFC<Props> = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        text: inputText,
        completed: false,
      },
    ]);
    setInputText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>追加</button>
      </form>
    </div>
  );
};
