import Header from "./components/Header"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import './app.css'
function App() {
 

  return (
    <div className="box">
     
      <BrowserRouter>
      
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
