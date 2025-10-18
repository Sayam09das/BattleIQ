import React from "react";
import { Route } from "react-router-dom";
import AIQuiz from "./AIQuiz/AIQuiz";
import PerformanceInsights from "./PerformanceInsights/PerformanceInsights";
import SkillBuilder from "./SkillBuilder/SkillBuilder";
import QuizLibrary from "./Resources/QuizLibrary/QuizLibrary";
import Tutorials from "./Resources/Tutorials/Tutorials";
import Certifications from "./Resources/Certifications/Certifications";

export const LearningRoutes = () => (
    <>
        <Route path="/learning/ai-generator" element={<AIQuiz />} />
        <Route path="/learning/performance" element={<PerformanceInsights />} />
        <Route path="/learning/skill-builder" element={<SkillBuilder />} />
        <Route path="/learning/resources/quiz-library" element={<QuizLibrary />} />
        <Route path="/learning/resources/tutorials" element={<Tutorials />} />
        <Route path="/learning/resources/certifications" element={<Certifications />} />
    </>
);
