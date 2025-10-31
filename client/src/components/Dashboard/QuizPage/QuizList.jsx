import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSubject, setSelectedSubject] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");

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

    // Advanced filtering and sorting
    const filteredQuizzes = quizzes
        .filter(quiz => {
            const matchesSubject = selectedSubject === "All" || quiz.subject === selectedSubject;
            const matchesSearch = quiz.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                quiz.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                quiz.description?.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesSubject && matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === "newest") return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
            if (sortBy === "oldest") return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
            if (sortBy === "title") return (a.title || "").localeCompare(b.title || "");
            return 0;
        });

    const clearFilters = () => {
        setSelectedSubject("All");
        setSearchQuery("");
        setSortBy("newest");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#4A1A35] to-[#3B132A] relative overflow-hidden flex justify-center items-center">
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-[#f3efda] border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-20 h-20 border-4 border-[#f3efda] border-b-transparent rounded-full animate-spin opacity-30" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                    <div className="mt-6 text-[#f3efda] text-lg font-medium text-center">Loading quizzes...</div>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen py-16 sm:py-20 bg-gradient-to-b from-[#4A1A35] to-[#3B132A] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#f3efda] opacity-5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f3efda] opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4 transform hover:scale-110 transition-transform duration-300">
                        <span className="text-6xl sm:text-7xl filter drop-shadow-lg">🧠</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold text-[#f3efda] mb-4 tracking-tight">
                        Explore Quizzes
                    </h1>
                    <p className="text-[#f3efda] opacity-80 text-lg sm:text-xl max-w-2xl mx-auto">
                        Challenge yourself and expand your knowledge with our curated collection
                    </p>
                </div>

                {/* Advanced Search and Filter Section */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="max-w-3xl mx-auto">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#f3efda] to-purple-300 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative flex items-center bg-[#f3efda] bg-opacity-10 backdrop-blur-md border-2 border-[#f3efda] border-opacity-30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-opacity-50">
                                <div className="pl-6 pr-3">
                                    <svg className="w-6 h-6 text-[#f3efda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search quizzes by title, subject, or description..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 py-4 px-2 bg-transparent text-[#f3efda] placeholder-[#f3efda] placeholder-opacity-50 focus:outline-none text-lg"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="pr-6 pl-3 text-[#f3efda] hover:text-white transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Filters Row */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                        {/* Subject Filter */}
                        <div className="relative inline-block w-full sm:w-auto">
                            <label className="block text-[#f3efda] text-sm font-medium mb-2 text-center sm:text-left">
                                Subject
                            </label>
                            <select
                                value={selectedSubject}
                                onChange={e => setSelectedSubject(e.target.value)}
                                className="appearance-none w-full sm:w-48 px-6 py-3 pr-12 rounded-xl border-2 border-[#f3efda] border-opacity-30 bg-[#f3efda] bg-opacity-10 backdrop-blur-md text-[#f3efda] font-semibold focus:outline-none focus:ring-4 focus:ring-[#f3efda] focus:ring-opacity-30 transition-all duration-300 hover:border-opacity-50 cursor-pointer"
                            >
                                {subjects.map(sub => (
                                    <option key={sub} value={sub} className="bg-[#4A1A35] text-[#f3efda]">
                                        {sub}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-[42px] pointer-events-none">
                                <svg className="w-5 h-5 text-[#f3efda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Sort By Filter */}
                        <div className="relative inline-block w-full sm:w-auto">
                            <label className="block text-[#f3efda] text-sm font-medium mb-2 text-center sm:text-left">
                                Sort By
                            </label>
                            <select
                                value={sortBy}
                                onChange={e => setSortBy(e.target.value)}
                                className="appearance-none w-full sm:w-48 px-6 py-3 pr-12 rounded-xl border-2 border-[#f3efda] border-opacity-30 bg-[#f3efda] bg-opacity-10 backdrop-blur-md text-[#f3efda] font-semibold focus:outline-none focus:ring-4 focus:ring-[#f3efda] focus:ring-opacity-30 transition-all duration-300 hover:border-opacity-50 cursor-pointer"
                            >
                                <option value="newest" className="bg-[#4A1A35] text-[#f3efda]">Newest First</option>
                                <option value="oldest" className="bg-[#4A1A35] text-[#f3efda]">Oldest First</option>
                                <option value="title" className="bg-[#4A1A35] text-[#f3efda]">Title (A-Z)</option>
                            </select>
                            <div className="absolute right-4 top-[42px] pointer-events-none">
                                <svg className="w-5 h-5 text-[#f3efda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Clear Filters Button */}
                        {(selectedSubject !== "All" || searchQuery || sortBy !== "newest") && (
                            <div className="w-full sm:w-auto sm:mt-7">
                                <button
                                    onClick={clearFilters}
                                    className="w-full sm:w-auto px-6 py-3 bg-[#f3efda] text-[#4A1A35] font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Results Summary */}
                {filteredQuizzes.length > 0 && (
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 px-8 py-3 bg-[#f3efda] bg-opacity-10 backdrop-blur-sm text-[#f3efda] rounded-full font-medium border-2 border-[#f3efda] border-opacity-20 shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-lg">
                                {filteredQuizzes.length} {filteredQuizzes.length === 1 ? 'Quiz' : 'Quizzes'} Found
                            </span>
                        </div>
                    </div>
                )}

                {/* Quiz Grid or Empty State */}
                {filteredQuizzes.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-block p-12 bg-[#f3efda] bg-opacity-10 backdrop-blur-md rounded-3xl border-2 border-[#f3efda] border-opacity-20 shadow-2xl">
                            <div className="text-7xl mb-6 animate-bounce">🔍</div>
                            <h3 className="text-[#f3efda] text-2xl font-bold mb-3">No quizzes found</h3>
                            <p className="text-[#f3efda] opacity-70 text-lg mb-6">
                                {searchQuery ? "Try adjusting your search terms" : "Try selecting a different subject"}
                            </p>
                            {(selectedSubject !== "All" || searchQuery || sortBy !== "newest") && (
                                <button
                                    onClick={clearFilters}
                                    className="px-8 py-3 bg-[#f3efda] text-[#4A1A35] font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    Clear All Filters
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredQuizzes.map((quiz, index) => (
                            <div
                                key={quiz._id}
                                className="transform transition-all duration-300 hover:scale-105"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <QuizCard quiz={quiz} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add CSS animation */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default QuizList;