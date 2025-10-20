import React from 'react';
import { Star, Zap, Flame, Brain, ChevronRight } from 'lucide-react';

const AchievementsEvents = () => {
    const recentAchievements = [
        { title: "Perfect Score", desc: "Got 100% on Math Quiz", icon: Star, color: "#FFD700" },
        { title: "Speed Demon", desc: "Completed 5 quizzes in 1 day", icon: Zap, color: "#FF6B35" },
        { title: "Streak Master", desc: "7-day learning streak", icon: Flame, color: "#FF4500" },
        { title: "Brain Teaser", desc: "Solved 50 difficult questions", icon: Brain, color: "#9370DB" },
    ];

    const upcomingEvents = [
        { title: "Mathematics Championship", date: "Oct 25", time: "3:00 PM" },
        { title: "Science Quiz Competition", date: "Oct 28", time: "5:00 PM" },
        { title: "Study Group Session", date: "Oct 30", time: "2:00 PM" },
    ];

    return (
        <div className="lg:col-span-7 space-y-6">
            {/* Recent Achievements */}
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: "white" }}>
                <h3 className="text-lg font-bold mb-4">Recent Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recentAchievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: "#F3EFDA" }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: achievement.color + "20" }}>
                                <achievement.icon size={24} style={{ color: achievement.color }} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">{achievement.title}</p>
                                <p className="text-xs opacity-70">{achievement.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: "white" }}>
                <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                    {upcomingEvents.map((event, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-4 rounded-lg hover:shadow-md transition-all cursor-pointer"
                            style={{ backgroundColor: "#F3EFDA" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold" style={{ backgroundColor: "#3B132A", color: "#F3EFDA" }}>
                                    {event.date.split(' ')[1]}
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
