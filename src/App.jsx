import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  decrementByAmount,
  double
} from './features/counter/counterSlice';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="app">
      <h1>Redux Toolkit Counter</h1>

      <p className="count-display">{count}</p>

      <div className="button-row">
        <button onClick={() => dispatch(decrement())}>− Decrement</button>
        <button onClick={() => dispatch(increment())}>+ Increment</button>
      </div>

      <div className="button-row">
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Add 5
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Add 10
        </button>
      </div>

      <div className="button-row">
        <button onClick={() => dispatch(decrementByAmount(3))}>
          Subtract 3
        </button>
        <button onClick={() => dispatch(decrementByAmount(7))}>
          Subtract 7
        </button>
        <button onClick={() => dispatch(double())}>Double</button>
      </div>

      <button className="reset-button" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </main>
  );
}

export default App;