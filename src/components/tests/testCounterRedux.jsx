import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testTodo } from 'reducers/index';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(n => n + 1);
  }

  const onDecrease = () => {
    setNumber(n => n - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button id="add" onClick={onIncrease}>+1</button>
      <button id="minus" onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;