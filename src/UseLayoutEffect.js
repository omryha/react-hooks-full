import React, { useState, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);

  useLayoutEffect(() => {
    setEffectLogs((prevEffectLogs) => [
      ...prevEffectLogs,
      'effect fn has been invoked',
    ]);
  }, [randomNumber]);

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          setRandomNumber(Math.random());
        }}
      >
        New Random
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{'🍔'.repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  );
};

export default UseLayoutEffect;
