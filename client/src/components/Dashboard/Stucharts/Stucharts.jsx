import React from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

// Sample data
const performanceData = [
    { month: "Jan", score: 80, average: 70 },
    { month: "Feb", score: 85, average: 72 },
    { month: "Mar", score: 78, average: 75 },
    { month: "Apr", score: 90, average: 80 },
    { month: "May", score: 88, average: 82 },
];

const Stucharts = () => {
    return (
        <div
            className="col-span-1 md:col-span-2 p-4 md:p-6 rounded-xl shadow-lg"
            style={{ backgroundColor: "white" }}
        >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 sm:gap-0">
                <h3 className="text-lg font-bold">Performance Trend</h3>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#8B4513" }} />
                        <span>Your Score</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#D2691E" }} />
                        <span>Average</span>
                    </div>
                </div>
            </div>

            {/* Chart Wrapper */}
            <div className="w-full" style={{ minHeight: 280 }}>
                <ResponsiveContainer width="100%" height="100%" minHeight={280}>
                    <AreaChart data={performanceData}>
                        <defs>
                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B4513" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#8B4513" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#3B132A10" />
                        <XAxis dataKey="month" stroke="#3B132A" />
                        <YAxis stroke="#3B132A" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="score"
                            stroke="#8B4513"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorScore)"
                        />
                        <Line
                            type="monotone"
                            dataKey="average"
                            stroke="#D2691E"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stucharts;
