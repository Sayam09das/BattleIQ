const mongoose = require("mongoose");
const Quiz = require("./models/Quiz"); // adjust path if needed

// Connect directly to MongoDB Atlas
mongoose
    .connect("mongodb+srv://sayamprogrammingworld_db_user:Sayamdas123@cluster0.xzem6wh.mongodb.net/battleiq?retryWrites=true&w=majority&appName=Cluster0",{
        serverSelectionTimeoutMS: 30000,
    })
    .then(async () => {
        console.log("✅ Connected to MongoDB Atlas");

        const quizzes = [
            // 🌍 Geography
            {
                title: "Continents and Oceans Quiz",
                subject: "Geography",
                topic: "Continents and Oceans",
                gradeLevel: "Class 6",
                difficulty: "Easy",
                description: "Learn about Earth's continents and oceans.",
                questions: [
                    {
                        questionText: "How many continents are there on Earth?",
                        options: ["5", "6", "7", "8"],
                        correctAnswer: "7",
                    },
                    {
                        questionText: "Which is the largest ocean?",
                        options: ["Indian", "Pacific", "Atlantic", "Arctic"],
                        correctAnswer: "Pacific",
                    },
                ],
            },
            {
                title: "Landforms and Mountains Quiz",
                subject: "Geography",
                topic: "Landforms and Mountains",
                gradeLevel: "Class 7",
                difficulty: "Medium",
                description: "Explore Earth's mountains and valleys.",
                questions: [
                    {
                        questionText: "Which is the highest mountain on Earth?",
                        options: ["K2", "Everest", "Kanchenjunga", "Makalu"],
                        correctAnswer: "Everest",
                    },
                ],
            },

            // 🧮 Mathematics
            {
                title: "Fractions Basics",
                subject: "Mathematics",
                topic: "Fractions",
                gradeLevel: "Class 5",
                difficulty: "Easy",
                description: "Understand and solve fraction problems.",
                questions: [
                    {
                        questionText: "What is 1/2 + 1/4?",
                        options: ["3/4", "2/4", "1/3", "1/2"],
                        correctAnswer: "3/4",
                    },
                ],
            },

            // 🧬 Science
            {
                title: "The Solar System",
                subject: "Science",
                topic: "Space",
                gradeLevel: "Class 6",
                difficulty: "Easy",
                description: "Learn about planets in our solar system.",
                questions: [
                    {
                        questionText: "Which planet is known as the Red Planet?",
                        options: ["Mars", "Venus", "Earth", "Jupiter"],
                        correctAnswer: "Mars",
                    },
                ],
            },

            // 🧠 General Knowledge
            {
                title: "World Capitals",
                subject: "General Knowledge",
                topic: "Countries and Capitals",
                gradeLevel: "All",
                difficulty: "Medium",
                description: "Test your knowledge of world capitals.",
                questions: [
                    {
                        questionText: "What is the capital of Japan?",
                        options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
                        correctAnswer: "Tokyo",
                    },
                ],
            },
        ];

        await Quiz.deleteMany({});
        await Quiz.insertMany(quizzes);

        console.log("🎯 Sample quizzes inserted successfully!");
        process.exit();
    })
    .catch((err) => console.error("❌ MongoDB connection error:", err));
