import React, { useState, useCallback, memo } from 'react';

const UseCallback = () => {
  const [age, setAge] = useState(99);
  const handleClick = () => setAge(age + 1);
  const someValue = 'someValue';
  const doSomething = useCallback(() => {
    return someValue;
  }, [someValue]);

  return (
    <div>
      <Age age={age} handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
    </div>
  );
};

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <div
        style={{
          border: '2px',
          backgroundColor: 'papayawhip',
          padding: '1rem',
        }}
      >
        Today I am {age} years old
      </div>
      <pre>click the button below 👇 </pre>
      <button onClick={handleClick}>Get Older</button>
    </div>
  );
};

const Instructions = memo((props) => {
  return (
    <div style={{ backgroundColor: 'black', color: 'yellow', padding: '1rem' }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  );
});

export default UseCallback;
