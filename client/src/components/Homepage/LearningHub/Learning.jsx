// components/Homepage/LearningHub/Learning.jsx
import AIQuiz from "./AIQuiz/AIQuiz";
import PerformanceInsights from "./PerformanceInsights/PerformanceInsights";
import SkillBuilder from "./SkillBuilder/SkillBuilder";
import QuizLibrary from "./Resources/QuizLibrary/QuizLibrary";
import Tutorials from "./Resources/Tutorials/Tutorials";
import Certifications from "./Resources/Certifications/Certifications";

export const LearningRoutes = [
    { path: "/learning/ai-generator", element: <AIQuiz /> },
    { path: "/learning/performance", element: <PerformanceInsights /> },
    { path: "/learning/skill-builder", element: <SkillBuilder /> },
    { path: "/learning/resources/quiz-library", element: <QuizLibrary /> },
    { path: "/learning/resources/tutorials", element: <Tutorials /> },
    { path: "/learning/resources/certifications", element: <Certifications /> },
];
