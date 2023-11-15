// 2. Создайте компонент с лампочкой и кнопкой, которая позволяет включать и
// выключать лампочку. Под лампочкой предполагается кнопка button с
// соответствующим текстом

import { useReducer } from 'react';

function reducer(state, action) {
  switch (action) {
    case 'turnOnOrOffLight':
      return !state;

    default:
      break;
  }
}

const Task2 = () => {
  const [state, dispatch] = useReducer(reducer, false);

  return (
    <div>
      <h1 style={{ color: state ? 'orange' : 'black' }}>
        {state ? 'light bulb on' : 'light bulb is off'}
      </h1>
      <button onClick={() => dispatch('turnOnOrOffLight')}>on/of</button>
    </div>
  );
};

export default Task2;
