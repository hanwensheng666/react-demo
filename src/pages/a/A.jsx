import React, { useState, useEffect, useCallback, useMemo } from 'react';

export default function A() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log('触发eeffect', count);
  }, [count]);
  const pushToList = useCallback(
    (newItem) => {
      const newList = [...list, newItem];
      setList(newList);
    },
    [list]
  );
  const calcCount = useMemo(() => count * 2, [count]);
  return (
    <div>
      <h1>AAAA</h1>
      <h2
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}/{calcCount}
      </h2>
      <button onClick={() => pushToList(count)}>添加数据</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
