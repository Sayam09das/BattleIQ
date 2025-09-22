import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
