import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { AboutMe, Contact, Experience, Projects, NavBar } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='aboutMe-section'>
          <AboutMe />
        </div>
        {/* Navbar go here */}
        <div>
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
