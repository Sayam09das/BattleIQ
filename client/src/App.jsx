import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./components/Homepage/Home/Home";
import Footer from "./Pages/Footer/Footer";
import CreateQuiz from "./components/Homepage/CreateQuiz/CreateQuiz";
import FeaturesPage from "./components/Homepage/FeaturesPage/FeaturesPage";
import Login from "./components/Auth/Loginpage/Login";
import Register from "./components/Auth/Registerpage/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Otp from "./components/Auth/Otppage/Otp";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import Dailyquiz from "./components/Homepage/Questspage/Dailyquiz/Dailyquiz";
import TimeTrials from "./components/Homepage/Questspage/TimeTrials/TimeTrials";
import WeeklyTournament from "./components/Homepage/Questspage/WeeklyTournament/WeeklyTournament";
import SeasonalBattles from "./components/Homepage/Questspage/SeasonalBattles/SeasonalBattles";
import GlobalTournaments from "./components/Homepage/Questspage/GlobalTournaments/GlobalTournaments";
import AIQuiz from "./components/Homepage/LearningHub/AIQuiz/AIQuiz";
// Layout wrapper component
const Layout = () => {
  const location = useLocation();

  // all auth-related routes
  const authRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/otp",
    "/reset-password",
  ];

  // check if current path is in authRoutes
  const hideLayout = authRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/daily-quiz" element={<Dailyquiz />} />
        <Route path="/time-trials" element={<TimeTrials />} />
        <Route path="/weekly-tournament" element={<WeeklyTournament />} />
        <Route path="/seasonal-battles" element={<SeasonalBattles />} />
        <Route path="/global-tournaments" element={<GlobalTournaments />} />
        <Route path="/ai-generator" element={<AIQuiz />} />


        {/* Auth routes */}
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
