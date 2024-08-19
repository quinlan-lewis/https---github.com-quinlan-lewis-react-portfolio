import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { AboutMe, Contact, Experience, Projects, NavBar } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='wrapper'>
        <header className='header'>
          <img className='background' src='background/1Stars.svg'/>
          <img className='background' src='background/2Planets.svg'/>
          <img className='background' src='background/3Mountain.svg'/>
          <img className='background' src='background/4Mountain.svg'/>
          <img className='background' src='background/5Crater.svg'/>
          <img className='foreground' src='background/6Sun.svg'/>
          <AboutMe />
        </header>
        {/* Navbar go here */}
        <section>
          <Experience />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </div>
  )
}

export default App
