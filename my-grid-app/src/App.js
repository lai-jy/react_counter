
import React from 'react';
import Grid from './Grid';
import { GridProvider } from './GridContextt';

function App() {
  return (
    <GridProvider>
      <Grid />
    </GridProvider>
  );
}

export default App;
