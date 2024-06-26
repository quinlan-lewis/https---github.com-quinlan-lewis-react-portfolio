import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Projects, NavBar } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Experience />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
