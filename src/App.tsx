import axios from 'axios';
import { Link } from 'react-router-dom';
import AppButton from './components/0_atoms/AppButton';

function App() {
  const fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tasks/2`);
    console.log(res.data);
  };
  return (
    <div className="App">
      <h1>My React Project</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <AppButton text={'ボタン'} clickButton={() => fetchData()} />
    </div>
  );
}

export default App;
