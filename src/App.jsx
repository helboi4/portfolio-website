import React from 'react';
import { useState } from 'react'
import Intro from "./components/Intro";
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
