import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './components/Homepage/Home/Home';
import Footer from './Pages/Footer/Footer';
import TeacherDashboard from './components/Homepage/TeacherDashboard/TeacherDashboard';
import CreateQuiz from './components/Homepage/CreateQuiz/CreateQuiz';
import FeaturesPage from './components/Homepage/FeaturesPage/FeaturesPage';
import SuccessStoriesPage from './components/Homepage/SuccessStoriesPage/SuccessStoriesPage';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/features" element={<FeaturesPage/>}/>
        <Route path="/stories" element={<SuccessStoriesPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
