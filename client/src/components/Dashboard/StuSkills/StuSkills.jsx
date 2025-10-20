import React from "react";
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts";

const StuSkills = () => {
    const subjectData = [
        { subject: "Math", score: 85 },
        { subject: "Science", score: 92 },
        { subject: "History", score: 78 },
        { subject: "English", score: 88 },
        { subject: "Geography", score: 81 },
    ];

    const radarData = subjectData.map((item) => ({
        category: item.subject,
        value: item.score,
    }));

    // Custom tick style for responsive text size
    const renderTick = (props) => {
        const { x, y, payload } = props;
        return (
            <text
                x={x}
                y={y}
                textAnchor="middle"
                fontSize={window.innerWidth < 768 ? 10 : 12} // small on mobile
                fill="#3B132A"
            >
                {payload.value}
            </text>
        );
    };

    return (
        <div>
            <div
                className="p-6 rounded-xl shadow-lg"
                style={{ backgroundColor: "white" }}
            >
                <h3 className="text-lg font-bold mb-4">Skills Analysis</h3>
                <div className="w-full" style={{ minHeight: 280 }}>
                    <ResponsiveContainer width="100%" height="100%" minHeight={280}>
                        <RadarChart data={radarData}>
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
        </div>
    );
};

export default StuSkills;
