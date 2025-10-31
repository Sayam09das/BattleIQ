import React from "react";

const QuizCard = ({ quiz }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-gray-800">{quiz.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
                Subject: <span className="font-medium text-blue-500">{quiz.subject}</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
                Topic: <span className="font-medium text-green-500">{quiz.topic}</span>
            </p>

            <p className="text-gray-600 text-sm mb-4">
                {quiz.questions.length} Questions
            </p>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all w-full">
                Start Quiz
            </button>
        </div>
    );
};

export default QuizCard;
