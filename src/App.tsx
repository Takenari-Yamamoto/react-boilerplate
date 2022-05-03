import React from 'react';
import axios from 'axios';
import AppButton from './components/0_atoms/AppButton';

function App() {
  const fetchData = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    console.log(res.data);
  };
  return (
    <div className="App">
      <h1>My React Project</h1>
      <AppButton text={'ボタン'} clickButton={() => fetchData()} />
    </div>
  );
}

export default App;
