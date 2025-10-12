import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './components/Homepage/Home/Home';
import Footer from './Pages/Footer/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
