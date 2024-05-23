import React from 'react';

import Navbar from './components/navbar';

import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';

import './App.css'

const App = () => {
  return (
      <div class="main-container">
        <Navbar />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
  );
}

export default App;