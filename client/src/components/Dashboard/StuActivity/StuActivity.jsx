import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const StuActivity = () => {
    const [weeklyData, setWeeklyData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchActivityData = async () => {
        try {
            const token = localStorage.getItem("token");

            const [weeklyRes, subjectRes] = await Promise.all([
                axios.get(`${API_URL}/user/activity/weekly`, {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                axios.get(`${API_URL}/user/activity/subject-performance`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
            ]);

            setWeeklyData(weeklyRes.data.data);
            setSubjectData(subjectRes.data.data);
        } catch (error) {
            console.error("Error fetching activity data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchActivityData();
    }, []);

    if (loading) return <p className="text-center font-medium p-4">Loading activity...</p>;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Weekly Activity */}
            <div className="p-4 md:p-6 rounded-xl shadow-lg bg-white">
                <h3 className="text-lg font-bold mb-4">Weekly Activity</h3>
                <div className="w-full" style={{ minHeight: 250 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={weeklyData}>
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
            <div className="p-4 md:p-6 rounded-xl shadow-lg bg-white">
                <h3 className="text-lg font-bold mb-4">Subject Performance</h3>
                <div className="w-full" style={{ minHeight: 250 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={subjectData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" stroke="#3B132A10" />
                            <XAxis type="number" stroke="#3B132A" />
                            <YAxis type="category" dataKey="subject" stroke="#3B132A" width={90} />
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
    );
};

export default StuActivity;
