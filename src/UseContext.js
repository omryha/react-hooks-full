import React, { createContext, useContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext('light');

export const Content = () => {
  const { style, toggleStyle } = useContext(ThemeContext);

  return (
    <div
    style={{
        border:'solid',
          minHeight: '200px',
        backgroundColor: style === 'dark' ? 'black' : 'papaywhip',
        color: style === 'dark' ? 'white' : 'palevioletred',
        width: '100%',
      }}
    >
      {'The theme is: ' + style}
      <div>
        <button onClick={toggleStyle}>Change Theme</button>
      </div>
    </div>
  );
};

const UserContextExample = () => {
  const [style, setStyle] = useState('light');

  const toggleStyle = () => {
    setStyle((style) => (style === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ style, toggleStyle }}>
      <Content />
    </ThemeContext.Provider>
  );
};

export default UserContextExample;
