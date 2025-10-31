const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [String],
    correctAnswer: { type: String, required: true },
});

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subject: { type: String, required: true },
    topic: String,
    gradeLevel: String,
    difficulty: String,
    description: String,
    questions: [questionSchema],
});

module.exports = mongoose.model("Quiz", quizSchema);
