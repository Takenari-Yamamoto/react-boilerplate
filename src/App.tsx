import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/counterSlice';
import { RootState } from './redux/store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
