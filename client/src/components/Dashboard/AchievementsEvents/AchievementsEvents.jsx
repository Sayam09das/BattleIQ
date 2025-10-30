import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Star, Zap, Flame, Brain, ChevronRight } from 'lucide-react';

const icons = { Star, Zap, Flame, Brain };

const AchievementsEvents = () => {
    const [achievements, setAchievements] = useState([]);
    const [events, setEvents] = useState([]);

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_URL}/user/achievements-events`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                setAchievements(res.data.achievements || []);
                setEvents(res.data.events || []);
            } catch (err) {
                console.error("Error fetching Achievements & Events:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="lg:col-span-7 space-y-6">
            {/* Recent Achievements */}
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: "white" }}>
                <h3 className="text-lg font-bold mb-4">Recent Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {achievements.map((a, idx) => {
                        const Icon = icons[a.icon] || Star;
                        return (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F3EFDA" }}>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: a.color + "20" }}>
                                    <Icon size={24} style={{ color: a.color }} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{a.title}</p>
                                    <p className="text-xs opacity-70">{a.desc}</p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>

            {/* Upcoming Events */}
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: "white" }}>
                <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
                <div className="space-y-3">

                    {events.map((event, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-4 rounded-lg hover:shadow-md transition-all cursor-pointer"
                            style={{ backgroundColor: "#F3EFDA" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold"
                                    style={{ backgroundColor: "#3B132A", color: "#F3EFDA" }}>
                                    {event.date}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{event.title}</p>
                                    <p className="text-xs opacity-70">{event.date} • {event.time}</p>
                                </div>
                            </div>
                            <ChevronRight size={20} className="opacity-50" />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default AchievementsEvents;
