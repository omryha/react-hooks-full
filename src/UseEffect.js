import React, { useState } from 'react';
import { useEffect } from 'react';

export const BasicEffect = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = `You are ${age} years old`;
  }, [age]);

  return (
    <div>
      Your age is: {age}
      <p style={{ color: 'red' }}>Watch tab title</p>
      <div>
        <button onClick={() => setAge(age + 1)}>+</button>
        <button onClick={() => setAge(age - 1)}>-</button>
        <button onClick={() => setAge(0)}>Reset</button>
      </div>
    </div>
  );
};

export const EffectCleanup = () => {
  useEffect(() => {
    const clicked = () => console.log('window clicked');
    window.addEventListener('click', clicked);

    // return a cleanup function
    return () => {
      window.removeEventListener('click', clicked);
    };
  }, []);

  return <div>Watch console.log when clicking</div>;
};

// Skipping effects with an empty array dependency
export const ArrayDepMount = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [
      ...prevEffectLogs,
      'effect fn has been invoked',
    ]);
  }, []);

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          setRandomNumber(Math.random());
        }}
      >
        Generate Random Number
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{'🍔'.repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  );
};
