import React, { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleToggle = (isOn) => {
    setCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <GridContext.Provider value={{ count, handleToggle }}>
      {children}
    </GridContext.Provider>
  );
};
