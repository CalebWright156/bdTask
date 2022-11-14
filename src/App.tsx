import React from 'react';
import NavBar from './components/NavBar';
import OurWork from './components/OurWork';
import { myTheme } from '../src/styles/theme'
import { ThemeProvider } from 'styled-components';
import ProjectSection from './components/ProjectSection';

// Hi There
// For the stylings I used styled components, the layout of the project is split in the src folder into components, styles and assets
// The project was made with react in a typescript template
// I made a sort of 'mock database' in the sampleData.js file which has the list of projects and various information about them
// This sample data is then mapped into into individual project cards
// I only did the first six projects but the build has all the image assets as I wanted to do the whole thing but found it unncessary in showing what I wanted to show.
// The whole app is set up so that any new project merely needs to have it's details entered into the database, where it will be automatically rendered into a project card component
// I chose this method as I found it the most efficient for long term use/scaling
// Please if you have any questions email me

function App() {
  return (
   <>
   <ThemeProvider theme={myTheme}>
      <NavBar />
      <OurWork title="Our Work"/>
      <ProjectSection />
   </ThemeProvider>
   </>
  );
}

export default App;
