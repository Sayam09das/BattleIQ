import React from "react";
import "./App.css";
import { BrowserRouter, useRoutes, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

// Core Pages
import Home from "./components/Homepage/Home/Home";
import CreateQuiz from "./components/Homepage/CreateQuiz/CreateQuiz";
import FeaturesPage from "./components/Homepage/FeaturesPage/FeaturesPage";

// Auth Pages
import Login from "./components/Auth/Loginpage/Login";
import Register from "./components/Auth/Registerpage/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Otp from "./components/Auth/Otppage/Otp";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";

// 404 Page
import NotFound from "./Pages/NotFound/NotFound";

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
    // Core
    { path: "/", element: <Home /> },
    { path: "/createquiz", element: <CreateQuiz /> },
    { path: "/features", element: <FeaturesPage /> },

    // Grouped
    ...QuestRoutes,
    ...LearningRoutes,
    ...CommunityRoutes,

    // Auth
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/otp", element: <Otp /> },
    { path: "/reset-password", element: <ResetPassword /> },

    // Wildcard 404
    { path: "*", element: <NotFound /> },
  ];

  const element = useRoutes(routes);

  // Determine if current page is 404 by checking if pathname doesn't match any route except "*"
  const is404 = location.pathname !== "/" && !routes.some(route => {
    // Ignore wildcard
    if (route.path === "*") return false;
    // Exact match check for static paths
    return route.path === location.pathname;
  });

  const isAuthPage = authRoutes.has(location.pathname);

  return (
    <>
      {!isAuthPage && !is404 && <Navbar />}
      {element}
      {!isAuthPage && !is404 && <Footer />}
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
