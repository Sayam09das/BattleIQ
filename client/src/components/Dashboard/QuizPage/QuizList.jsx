import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSubject, setSelectedSubject] = useState("All");

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const res = await fetch(`${API_URL}/quiz`);
                const data = await res.json();
                setQuizzes(data.quizzes || []);
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

    const subjects = ["All", ...new Set(quizzes.map(q => q.subject))];
    const filteredQuizzes =
        selectedSubject === "All"
            ? quizzes
            : quizzes.filter(q => q.subject === selectedSubject);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500">
                Loading quizzes...
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
                🧠 Explore Quizzes
            </h1>

            {/* Subject Filter */}
            <div className="flex justify-center mb-6">
                <select
                    value={selectedSubject}
                    onChange={e => setSelectedSubject(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {subjects.map(sub => (
                        <option key={sub} value={sub}>
                            {sub}
                        </option>
                    ))}
                </select>
            </div>

            {/* Quiz Grid */}
            {filteredQuizzes.length === 0 ? (
                <p className="text-center text-gray-500">No quizzes found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredQuizzes.map(quiz => (
                        <QuizCard key={quiz._id} quiz={quiz} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuizList;
