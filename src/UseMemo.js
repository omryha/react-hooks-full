import React from 'react';
import { useMemo } from 'react';
import { memo } from 'react';
import { useState } from 'react';

const UseMemo = () => {
    const [age, setAge] = useState(99);
    const handleClick = () => setAge(age + 1);
    const someValue = useMemo(() => ({ value: 'someValue' }));
    const doSomething = () => {
      return someValue;
    };

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
      <div style={{ border: '2px', background: 'papayawhip', padding: '1rem' }}>
        Today I am {age} Years of Age
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  );
};

const Instructions = React.memo((props) => {
  return (
    <div style={{ background: 'black', color: 'yellow', padding: '1rem' }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  );
});

export default UseMemo;
