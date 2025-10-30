import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const StuSkills = () => {
    const [skillData, setSkillData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSkillData = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(`${API_URL}/user/skills-analysis`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // backend returns array -> transform to recharts format
            const radarFormatted = response.data.data.map(item => ({
                category: item.subject,
                value: item.score,
            }));

            setSkillData(radarFormatted);
        } catch (error) {
            console.error("Error fetching skills data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkillData();
    }, []);

    // Custom tick style
    const renderTick = ({ x, y, payload }) => (
        <text
            x={x}
            y={y}
            textAnchor="middle"
            fontSize={window.innerWidth < 768 ? 10 : 12}
            fill="#3B132A"
        >
            {payload.value}
        </text>
    );

    if (loading) {
        return (
            <div className="p-6 rounded-xl shadow-lg bg-white">
                <p className="text-center font-medium">Loading Skills Chart...</p>
            </div>
        );
    }

    return (
        <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-lg font-bold mb-4">Skills Analysis</h3>
            <div className="w-full" style={{ minHeight: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillData}>
                        <PolarGrid stroke="#3B132A20" />
                        <PolarAngleAxis dataKey="category" tick={renderTick} />
                        <PolarRadiusAxis stroke="#3B132A" />
                        <Radar
                            name="Your Skills"
                            dataKey="value"
                            stroke="#8B4513"
                            fill="#8B4513"
                            fillOpacity={0.5}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StuSkills;
