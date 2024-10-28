
import React, { useContext } from 'react';
import { GridContext } from './GridContextt';
import Cell from './Cell';

const Grid = () => {
  const { count, handleToggle } = useContext(GridContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div className="grid">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default Grid;
