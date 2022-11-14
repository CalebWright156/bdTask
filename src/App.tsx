import React from 'react';
import NavBar from './components/NavBar';
import OurWork from './components/OurWork';
import { myTheme } from '../src/styles/theme'
import { ThemeProvider } from 'styled-components';

function App() {
  return (
   <>
   <ThemeProvider theme={myTheme}>
      <NavBar />
      <OurWork title="Our Work"/>
   </ThemeProvider>
   </>
  );
}

export default App;
