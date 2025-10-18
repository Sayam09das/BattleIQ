import React from "react";
import { BrowserRouter, useRoutes, useLocation } from "react-router-dom";
import "./App.css";

// Layout Components
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

// Privacy Policy Page
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

// Core Pages
import Home from "./components/Homepage/Home/Home";
import CreateQuiz from "./components/Homepage/CreateQuiz/CreateQuiz";
import FeaturesPage from "./components/Homepage/FeaturesPage/FeaturesPage";
import SuccessStories from "./components/Homepage/SuccessStories/SuccessStories";
// Auth Pages
import Login from "./components/Auth/Loginpage/Login";
import Register from "./components/Auth/Registerpage/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Otp from "./components/Auth/Otppage/Otp";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";

// 404 Page
import NotFound from "./Pages/NotFound/NotFound";

// Cookies Component
import Cookies from "./Pages/Cookies/Cookies";

// Route Groups
import { QuestRoutes } from "./components/Homepage/Questspage/Quests";
import { LearningRoutes } from "./components/Homepage/LearningHub/Learning";
import { CommunityRoutes } from "./components/Homepage/Community/Community";

function Layout() {
  const location = useLocation();

  const authRoutes = new Set([
    "/login",
    "/register",
    "/forgot-password",
    "/otp",
    "/reset-password",
  ]);

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/createquiz", element: <CreateQuiz /> },
    { path: "/features", element: <FeaturesPage /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/stories", element: <SuccessStories /> },
    ...QuestRoutes,
    ...LearningRoutes,
    ...CommunityRoutes,
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/otp", element: <Otp /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "*", element: <NotFound /> },
  ];

  const element = useRoutes(routes);

  const is404 =
    location.pathname !== "/" &&
    !routes.some((route) => route.path !== "*" && route.path === location.pathname);

  const isAuthPage = authRoutes.has(location.pathname);

  return (
    <>
      {!isAuthPage && !is404 && <Navbar />}
      {element}
      {!isAuthPage && !is404 && <Footer />}
      {!isAuthPage && !is404 && <Cookies />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
