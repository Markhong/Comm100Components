import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import VirtualizedTable from './components/VirtualizedTable/VirtualizedTable';
import Grid from './components/Grid/Grid';
import theme from './components/Themes/Themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid />
      {/* <VirtualizedTable /> */}
    </ThemeProvider>
  );
}

export default App;
