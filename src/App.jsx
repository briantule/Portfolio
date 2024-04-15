import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
      <Parallax pages={2}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={2}
        style={{
          backgroundImage: `url('https://wallpapercave.com/wp/wp12299273.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <ParallaxLayer offset={0} speed={1}>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDisplay />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </ParallaxLayer>
    </Parallax>
    </div >
  );
}

export default App;
