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
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import OtpVerification from "./components/Auth/OTPVerification/OTPVerification";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";

// Layout wrapper component
const Layout = () => {
  const location = useLocation();

  // all auth-related routes
  const authRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/otp-verification",
    "/reset-password",
  ];

  // check if current path is in authRoutes
  const hideLayout = authRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/stories" element={<SuccessStoriesPage />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
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
