// 5. Создайте компонент, который позволяет пользователю добавлять и удалять
// элементы из списка. Используйте useCallback, чтобы оптимизировать функции
// добавления и удаления элементов.

import { useCallback, useState } from 'react';

const Task5 = () => {
  const [list, setList] = useState(['Hey', 'Hi', 'Hello']);
  const [val, setVal] = useState('');

  const deleteElement = useCallback(
    (e) => {
      const filtered = list.filter((el) => el !== e.target.id);
      setList(filtered);
    },
    [list]
  );

  const addElement = useCallback(() => {
    setList([...list, val]);
    setVal('');
  }, [list, val]);

  return (
    <div>
      {list.map((el, index) => (
        <div key={index} style={{ display: 'flex', gap: '1%', alignItems: 'center' }}>
          <p>{el}</p>
          <button id={el} style={{ height: '20px' }} onClick={deleteElement}>
            delete
          </button>
        </div>
      ))}

      <div style={{ display: 'flex', gap: '1%' }}>
        <input type='text' onChange={(e) => setVal(e.target.value)} value={val} />
        <button onClick={addElement}>add</button>
      </div>
    </div>
  );
};

export default Task5;
