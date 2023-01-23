import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Myself from './components/Myself';
import Skills from './components/Skills';
import Education from './components/Educaton';
import Contact from './components/Contact';
import FooterBlock from './components/FooterBlock';
import Experience from './components/Experience';
function App() {
  return (
    <div className='APP'>
      <Home />
      <Navbar />
      <Myself />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <FooterBlock />
    </div>
  );
}

export default App;
