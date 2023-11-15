// 1. Создайте компонент счетчика, который может увеличивать или уменьшать
// значение при нажатии на соответствующие кнопки.

import { useReducer } from 'react';

function reducer(state, action) {
  switch (action) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      break;
  }
}

const Task1 = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch('INCREMENT')}>+1</button>
      <button onClick={() => dispatch('DECREMENT')}>-1</button>
    </div>
  );
};

export default Task1;
