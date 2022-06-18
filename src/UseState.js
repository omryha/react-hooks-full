import React from 'react';
import { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count value is: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
};

export default UseState;
