import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, signIn} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>HI {counter}</h1>
      <button onClick={() => {dispatch(increment())}}>+</button>
      <button onClick={() => {dispatch(decrement())}}>-</button>
    </div>
  );
}

export default App;
