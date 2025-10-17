import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./components/Homepage/Home/Home";
import Footer from "./Pages/Footer/Footer";
import TeacherDashboard from "./components/Homepage/TeacherDashboard/TeacherDashboard";
import CreateQuiz from "./components/Homepage/CreateQuiz/CreateQuiz";
import FeaturesPage from "./components/Homepage/FeaturesPage/FeaturesPage";
import SuccessStoriesPage from "./components/Homepage/SuccessStoriesPage/SuccessStoriesPage";
import Login from "./components/Auth/Loginpage/Login";
import Register from "./components/Auth/Registerpage/Register";

// Layout wrapper component
const Layout = () => {
  const location = useLocation();

  // hide Navbar & Footer on login and register pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/stories" element={<SuccessStoriesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
