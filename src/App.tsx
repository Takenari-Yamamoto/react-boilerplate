import React from 'react';
import AppButton from './components/0_atoms/AppButton';

function App() {
  return (
    <div className="App">
      <h1>My React Project</h1>
      <AppButton text={'ボタン'} clickButton={() => alert('押された')} />
    </div>
  );
}

export default App;
