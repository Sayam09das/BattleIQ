import React, { useState } from 'react';
import { Target, Plus, Trash2, Save, Eye, Clock, BookOpen, Users, Settings, Image, Video, CheckCircle, Circle, Square } from 'lucide-react';

const CreateQuiz = () => {
    const [quizData, setQuizData] = useState({
        title: '',
        description: '',
        category: '',
        difficulty: 'medium',
        timeLimit: 30,
        passingScore: 70
    });

    const [questions, setQuestions] = useState([
        {
            id: 1,
            type: 'multiple-choice',
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0,
            points: 1
        }
    ]);

    const [activeStep, setActiveStep] = useState(1);

    const categories = ['General Knowledge', 'Science', 'Mathematics', 'History', 'Technology', 'Sports', 'Arts'];
    const difficulties = ['easy', 'medium', 'hard'];
    const questionTypes = [
        { value: 'multiple-choice', label: 'Multiple Choice', icon: Circle },
        { value: 'true-false', label: 'True/False', icon: CheckCircle },
        { value: 'short-answer', label: 'Short Answer', icon: Square }
    ];

    const addQuestion = () => {
        setQuestions([...questions, {
            id: questions.length + 1,
            type: 'multiple-choice',
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0,
            points: 1
        }]);
    };

    const removeQuestion = (id) => {
        setQuestions(questions.filter(q => q.id !== id));
    };

    const updateQuestion = (id, field, value) => {
        setQuestions(questions.map(q =>
            q.id === id ? { ...q, [field]: value } : q
        ));
    };

    const updateOption = (questionId, optionIndex, value) => {
        setQuestions(questions.map(q =>
            q.id === questionId ? {
                ...q,
                options: q.options.map((opt, idx) => idx === optionIndex ? value : opt)
            } : q
        ));
    };

    const handleSave = () => {
        console.log('Quiz saved:', { quizData, questions });
        alert('Quiz saved successfully!');
    };

    const handlePublish = () => {
        console.log('Quiz published:', { quizData, questions });
        alert('Quiz published successfully!');
    };

    return (
        <div className="relative w-full min-h-screen bg-[#3B132A] overflow-hidden">
            <style>{`
                .fade-in { opacity: 0; animation: fadeIn 0.6s ease forwards; }
                @keyframes fadeIn { to { opacity: 1; } }
                
                .slide-up { opacity: 0; transform: translateY(20px); animation: slideUp 0.5s ease forwards; }
                @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
                
                .scale-in { opacity: 0; transform: scale(0.95); animation: scaleIn 0.5s ease forwards; }
                @keyframes scaleIn { to { opacity: 1; transform: scale(1); } }
                
                .float { animation: float 3s ease-in-out infinite; }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20 float"
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 10}%`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="max-w-6xl mx-auto mb-8 fade-in">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-[#F3EFDA]">
                                    Create Quiz
                                </h1>
                                <p className="text-[#F3EFDA]/70">Build custom assessments for your students</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleSave}
                                className="flex items-center gap-2 px-4 py-2 bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 rounded-lg font-semibold hover:bg-[#F3EFDA]/20 transition-all"
                            >
                                <Save className="w-5 h-5" />
                                Save Draft
                            </button>
                            <button
                                onClick={handlePublish}
                                className="flex items-center gap-2 px-4 py-2 bg-[#F3EFDA] text-[#3B132A] rounded-lg font-semibold hover:bg-[#F3EFDA]/90 transition-all"
                            >
                                <Eye className="w-5 h-5" />
                                Publish
                            </button>
                        </div>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="max-w-6xl mx-auto mb-8 slide-up">
                    <div className="bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 border border-[#F3EFDA]/20">
                        <div className="flex items-center justify-between">
                            {[
                                { step: 1, label: 'Quiz Info', icon: BookOpen },
                                { step: 2, label: 'Add Questions', icon: Target },
                                { step: 3, label: 'Settings', icon: Settings }
                            ].map((item, index) => (
                                <div key={item.step} className="flex items-center flex-1">
                                    <button
                                        onClick={() => setActiveStep(item.step)}
                                        className={`flex items-center gap-3 ${activeStep === item.step ? 'opacity-100' : 'opacity-50'} transition-all hover:opacity-100`}
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeStep === item.step
                                                ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                                                : 'bg-[#F3EFDA]/20'
                                            }`}>
                                            <item.icon className="w-5 h-5 text-[#F3EFDA]" />
                                        </div>
                                        <span className="text-[#F3EFDA] font-medium hidden sm:block">{item.label}</span>
                                    </button>
                                    {index < 2 && (
                                        <div className="flex-1 h-0.5 bg-[#F3EFDA]/20 mx-4" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Step 1: Quiz Information */}
                    {activeStep === 1 && (
                        <div className="scale-in bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-[#F3EFDA]/20">
                            <h2 className="text-2xl font-bold text-[#F3EFDA] mb-6">Quiz Information</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#F3EFDA] mb-2">Quiz Title *</label>
                                    <input
                                        type="text"
                                        value={quizData.title}
                                        onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-[#F3EFDA] placeholder-[#F3EFDA]/50 focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                                        placeholder="Enter quiz title"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#F3EFDA] mb-2">Description</label>
                                    <textarea
                                        value={quizData.description}
                                        onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
                                        rows="4"
                                        className="w-full px-4 py-3 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-[#F3EFDA] placeholder-[#F3EFDA]/50 focus:outline-none focus:border-[#F3EFDA]/40 transition-all resize-none"
                                        placeholder="Describe your quiz"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#F3EFDA] mb-2">Category</label>
                                        <select
                                            value={quizData.category}
                                            onChange={(e) => setQuizData({ ...quizData, category: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-[#F3EFDA] focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                                        >
                                            <option value="">Select category</option>
                                            {categories.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#F3EFDA] mb-2">Difficulty</label>
                                        <div className="flex gap-2">
                                            {difficulties.map(diff => (
                                                <button
                                                    key={diff}
                                                    onClick={() => setQuizData({ ...quizData, difficulty: diff })}
                                                    className={`flex-1 px-4 py-3 rounded-lg font-medium capitalize transition-all ${quizData.difficulty === diff
                                                            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                                                            : 'bg-[#3B132A]/50 text-[#F3EFDA]/70 border border-[#F3EFDA]/20 hover:bg-[#3B132A]/70'
                                                        }`}
                                                >
                                                    {diff}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setActiveStep(2)}
                                    className="w-full sm:w-auto px-8 py-3 bg-[#F3EFDA] text-[#3B132A] rounded-lg font-semibold hover:bg-[#F3EFDA]/90 transition-all"
                                >
                                    Next: Add Questions
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Add Questions */}
                    {activeStep === 2 && (
                        <div className="space-y-6">
                            {questions.map((question, qIndex) => (
                                <div key={question.id} className="scale-in bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 border border-[#F3EFDA]/20" style={{ animationDelay: `${qIndex * 0.1}s` }}>
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-lg font-bold text-[#F3EFDA]">Question {qIndex + 1}</h3>
                                        <button
                                            onClick={() => removeQuestion(question.id)}
                                            className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#F3EFDA] mb-2">Question Type</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {questionTypes.map(type => (
                                                    <button
                                                        key={type.value}
                                                        onClick={() => updateQuestion(question.id, 'type', type.value)}
                                                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${question.type === type.value
                                                                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                                                                : 'bg-[#3B132A]/50 text-[#F3EFDA]/70 border border-[#F3EFDA]/20 hover:bg-[#3B132A]/70'
                                                            }`}
                                                    >
                                                        <type.icon className="w-4 h-4" />
                                                        {type.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#F3EFDA] mb-2">Question Text *</label>
                                            <textarea
                                                value={question.question}
                                                onChange={(e) => updateQuestion(question.id, 'question', e.target.value)}
                                                rows="3"
                                                className="w-full px-4 py-3 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-[#F3EFDA] placeholder-[#F3EFDA]/50 focus:outline-none focus:border-[#F3EFDA]/40 transition-all resize-none"
                                                placeholder="Enter your question"
                                            />
                                        </div>

                                        {question.type === 'multiple-choice' && (
                                            <div>
                                                <label className="block text-sm font-medium text-[#F3EFDA] mb-2">Answer Options</label>
                                                <div className="space-y-3">
                                                    {question.options.map((option, optIndex) => (
                                                        <div key={optIndex} className="flex items-center gap-3">
                                                            <button
                                                                onClick={() => updateQuestion(question.id, 'correctAnswer', optIndex)}
                                                                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${question.correctAnswer === optIndex
                                                                        ? 'border-green-500 bg-green-500'
                                                                        : 'border-[#F3EFDA]/40 hover:border-[#F3EFDA]'
                                                                    }`}
                                                            >
                                                                {question.correctAnswer === optIndex && (
                                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                                )}
                                                            </button>
                                                            <input
                                                                type="text"
                                                                value={option}
                                                                onChange={(e) => updateOption(question.id, optIndex, e.target.value)}
                                                                className="flex-1 px-4 py-2 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-[#F3EFDA] placeholder-[#F3EFDA]/50 focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                                                                placeholder={`Option ${optIndex + 1}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-xs text-[#F3EFDA]/60 mt-2">Click the circle to mark the correct answer</p>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#F3EFDA] mb-2">Points</label>
                                                <input
                                                    type="number"
                                                    value={question.points}
                                                    onChange={(e) => updateQuestion(question.id, 'points', parseInt(e.target.value))}
                                                    className="w-24 px-4 py-2 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-[#F3EFDA] focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                                                    min="1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={addQuestion}
                                className="w-full py-4 bg-[#F3EFDA]/10 border-2 border-dashed border-[#F3EFDA]/30 rounded-xl text-[#F3EFDA] font-semibold hover:bg-[#F3EFDA]/20 hover:border-[#F3EFDA]/50 transition-all flex items-center justify-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Add Question
                            </button>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setActiveStep(1)}
                                    className="px-6 py-3 bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 rounded-lg font-semibold hover:bg-[#F3EFDA]/20 transition-all"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={() => setActiveStep(3)}
                                    className="flex-1 px-6 py-3 bg-[#F3EFDA] text-[#3B132A] rounded-lg font-semibold hover:bg-[#F3EFDA]/90 transition-all"
                                >
                                    Next: Settings
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Settings */}
                    {activeStep === 3 && (
                        <div className="scale-in bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-[#F3EFDA]/20">
                            <h2 className="text-2xl font-bold text-[#F3EFDA] mb-6">Quiz Settings</h2>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#F3EFDA] mb-2">
                                            <Clock className="w-4 h-4 inline mr-2" />
                                            Time Limit (minutes)
                                        </label>
                                        <input
                                            type="number"
                                            value={quizData.timeLimit}
                                            onChange={(e) => setQuizData({ ...quizData, timeLimit: parseInt(e.target.value) })}
                                            className="w-full px-4 py-3 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-[#F3EFDA] focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                                            min="1"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#F3EFDA] mb-2">
                                            <Target className="w-4 h-4 inline mr-2" />
                                            Passing Score (%)
                                        </label>
                                        <input
                                            type="number"
                                            value={quizData.passingScore}
                                            onChange={(e) => setQuizData({ ...quizData, passingScore: parseInt(e.target.value) })}
                                            className="w-full px-4 py-3 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-[#F3EFDA] focus:outline-none focus:border-[#F3EFDA]/40 transition-all"
                                            min="0"
                                            max="100"
                                        />
                                    </div>
                                </div>

                                <div className="bg-[#3B132A]/50 rounded-lg p-6 border border-[#F3EFDA]/10">
                                    <h3 className="text-lg font-semibold text-[#F3EFDA] mb-4">Quiz Summary</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#F3EFDA]">{questions.length}</div>
                                            <div className="text-sm text-[#F3EFDA]/70">Questions</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#F3EFDA]">{questions.reduce((sum, q) => sum + q.points, 0)}</div>
                                            <div className="text-sm text-[#F3EFDA]/70">Total Points</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#F3EFDA]">{quizData.timeLimit}</div>
                                            <div className="text-sm text-[#F3EFDA]/70">Minutes</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#F3EFDA]">{quizData.passingScore}%</div>
                                            <div className="text-sm text-[#F3EFDA]/70">To Pass</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setActiveStep(2)}
                                        className="px-6 py-3 bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 rounded-lg font-semibold hover:bg-[#F3EFDA]/20 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handlePublish}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Eye className="w-5 h-5" />
                                        Publish Quiz
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateQuiz;