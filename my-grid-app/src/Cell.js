
import React, { useState, useContext } from 'react';
import { GridContext } from './GridContextt';

const Cell = () => {
  const [active, setActive] = useState(false);
  const { handleToggle } = useContext(GridContext);

  const handleClick = () => {
    setActive(!active);
    handleToggle(!active);
  };

  return (
    <div
      className={`cell ${active ? 'active' : ''}`}
      onClick={handleClick}
    />
  );
};

export default Cell;
