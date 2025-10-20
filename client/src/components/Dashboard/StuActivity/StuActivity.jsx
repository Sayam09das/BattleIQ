import React from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const StuActivity = () => {
    const radarData = [
        { category: "Speed", value: 85 },
        { category: "Accuracy", value: 92 },
        { category: "Consistency", value: 78 },
        { category: "Effort", value: 88 },
        { category: "Improvement", value: 95 },
    ];

    const categoryData = [
        { name: "Completed", value: 45, color: "#8B4513" },
        { name: "In Progress", value: 12, color: "#D2691E" },
        { name: "Not Started", value: 8, color: "#DEB887" },
    ];

    const weeklyActivity = [
        { day: "Mon", quizzes: 4, hours: 2.5 },
        { day: "Tue", quizzes: 3, hours: 1.8 },
        { day: "Wed", quizzes: 5, hours: 3.2 },
        { day: "Thu", quizzes: 2, hours: 1.5 },
        { day: "Fri", quizzes: 6, hours: 4.0 },
        { day: "Sat", quizzes: 7, hours: 5.5 },
        { day: "Sun", quizzes: 3, hours: 2.0 },
    ];

    const subjectData = [
        { subject: "Math", score: 85 },
        { subject: "Science", score: 92 },
        { subject: "History", score: 78 },
        { subject: "English", score: 88 },
        { subject: "Geography", score: 81 },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Weekly Activity */}
                <div
                    className="p-6 rounded-xl shadow-lg"
                    style={{ backgroundColor: "white" }}
                >
                    <h3 className="text-lg font-bold mb-4">Weekly Activity</h3>
                    <div style={{ width: "100%", minHeight: 250 }}>
                        <ResponsiveContainer width="100%" height="100%" minHeight={250}>
                            <BarChart data={weeklyActivity}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#3B132A10" />
                                <XAxis dataKey="day" stroke="#3B132A" />
                                <YAxis stroke="#3B132A" />
                                <Tooltip />
                                <Bar
                                    dataKey="quizzes"
                                    fill="#8B4513"
                                    radius={[8, 8, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Subject Performance */}
                <div
                    className="p-6 rounded-xl shadow-lg"
                    style={{ backgroundColor: "white" }}
                >
                    <h3 className="text-lg font-bold mb-4">Subject Performance</h3>
                    <div style={{ width: "100%", minHeight: 250 }}>
                        <ResponsiveContainer width="100%" height="100%" minHeight={250}>
                            <BarChart data={subjectData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#3B132A10" />
                                <XAxis type="number" stroke="#3B132A" />
                                <YAxis type="category" dataKey="subject" stroke="#3B132A" />
                                <Tooltip />
                                <Bar
                                    dataKey="score"
                                    fill="#D2691E"
                                    radius={[0, 8, 8, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StuActivity;
