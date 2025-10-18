import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

// Core Pages
import Home from "./components/Homepage/Home/Home";
import CreateQuiz from "./components/Homepage/CreateQuiz/CreateQuiz";
import FeaturesPage from "./components/Homepage/FeaturesPage/FeaturesPage";

// Auth
import Login from "./components/Auth/Loginpage/Login";
import Register from "./components/Auth/Registerpage/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Otp from "./components/Auth/Otppage/Otp";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";

// ✅ Import route groups
import { QuestRoutes } from "./components/Homepage/Questspage/Quests";
import { LearningRoutes } from "./components/Homepage/LearningHub/Learning";
import { CommunityRoutes } from "./components/Homepage/Community/Community";

const Layout = () => {
  const location = useLocation();
  const authRoutes = ["/login", "/register", "/forgot-password", "/otp", "/reset-password"];
  const hideLayout = authRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/features" element={<FeaturesPage />} />

        {/* ✅ Grouped Routes */}
        {QuestRoutes()}
        {LearningRoutes()}
        {CommunityRoutes()}

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
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