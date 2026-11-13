import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profile } from './data';

function App() {
  // browser tab title
  useEffect(() => {
    document.title = profile.handle;
  }, []);

  return (
    <div className="App">
      {/* hidden until you tab to it, jumps past the nav */}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      {/* sections go in the order they show on the page */}
      <main id="main" tabIndex={-1}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
