import React, { useState } from 'react';
import { BookOpen, Users, FileText, Calendar, TrendingUp, Bell, Plus, Search, MoreVertical, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const TeacherDashboard = () => {
    const [selectedTab, setSelectedTab] = useState('overview');

    const stats = [
        { icon: Users, label: 'Total Students', value: '156', change: '+12%', color: 'from-blue-500 to-blue-600' },
        { icon: BookOpen, label: 'Active Classes', value: '8', change: '+2', color: 'from-purple-500 to-purple-600' },
        { icon: FileText, label: 'Assignments', value: '24', change: '6 pending', color: 'from-pink-500 to-pink-600' },
        { icon: TrendingUp, label: 'Avg. Performance', value: '87%', change: '+5%', color: 'from-green-500 to-green-600' },
    ];

    const classes = [
        { name: 'Mathematics 101', students: 32, schedule: 'Mon, Wed, Fri - 9:00 AM', color: 'bg-blue-500' },
        { name: 'Physics Advanced', students: 28, schedule: 'Tue, Thu - 10:30 AM', color: 'bg-purple-500' },
        { name: 'Chemistry Basics', students: 35, schedule: 'Mon, Wed - 2:00 PM', color: 'bg-pink-500' },
        { name: 'Biology Lab', students: 25, schedule: 'Fri - 11:00 AM', color: 'bg-green-500' },
    ];

    const recentAssignments = [
        { title: 'Quadratic Equations', class: 'Mathematics 101', dueDate: '2025-10-20', submitted: 28, total: 32, status: 'active' },
        { title: 'Newton\'s Laws', class: 'Physics Advanced', dueDate: '2025-10-18', submitted: 24, total: 28, status: 'grading' },
        { title: 'Chemical Bonding', class: 'Chemistry Basics', dueDate: '2025-10-22', submitted: 15, total: 35, status: 'active' },
        { title: 'Cell Structure', class: 'Biology Lab', dueDate: '2025-10-25', submitted: 0, total: 25, status: 'draft' },
    ];

    const upcomingEvents = [
        { title: 'Parent-Teacher Meeting', date: 'Oct 18, 2025', time: '3:00 PM', type: 'meeting' },
        { title: 'Science Fair Preparation', date: 'Oct 20, 2025', time: '10:00 AM', type: 'event' },
        { title: 'Exam: Mathematics 101', date: 'Oct 25, 2025', time: '9:00 AM', type: 'exam' },
    ];

    return (
        <div className="relative w-full min-h-screen bg-[#3B132A] overflow-hidden">
            <style>{`
                .fade-in { opacity: 0; animation: fadeIn 0.6s ease forwards; }
                @keyframes fadeIn { to { opacity: 1; } }
                
                .slide-up { opacity: 0; transform: translateY(20px); animation: slideUp 0.5s ease forwards; }
                @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
                
                .scale-in { opacity: 0; transform: scale(0.95); animation: scaleIn 0.5s ease forwards; }
                @keyframes scaleIn { to { opacity: 1; transform: scale(1); } }
                
                .float { animation: float 3s ease-in-out infinite; }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20 float"
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 10}%`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="max-w-7xl mx-auto mb-8 fade-in">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-[#F3EFDA] mb-2">
                                Teacher Dashboard
                            </h1>
                            <p className="text-[#F3EFDA]/70">Welcome back, Prof. Anderson</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="relative p-2 rounded-lg bg-[#F3EFDA]/10 hover:bg-[#F3EFDA]/20 transition-all">
                                <Bell className="w-5 h-5 text-[#F3EFDA]" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#F3EFDA] text-[#3B132A] rounded-lg font-semibold hover:bg-[#F3EFDA]/90 transition-all">
                                <Plus className="w-5 h-5" />
                                New Assignment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="slide-up bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/15 transition-all"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-xs text-green-400 font-medium">{stat.change}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#F3EFDA] mb-1">{stat.value}</h3>
                                <p className="text-sm text-[#F3EFDA]/70">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* My Classes */}
                        <div className="scale-in bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 border border-[#F3EFDA]/20">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-[#F3EFDA]">My Classes</h2>
                                <button className="text-sm text-[#F3EFDA]/70 hover:text-[#F3EFDA] transition-all">View All</button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {classes.map((cls, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#3B132A]/50 rounded-lg p-4 border border-[#F3EFDA]/10 hover:border-[#F3EFDA]/30 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className={`w-10 h-10 rounded-lg ${cls.color} flex items-center justify-center`}>
                                                <BookOpen className="w-5 h-5 text-white" />
                                            </div>
                                            <button className="text-[#F3EFDA]/50 hover:text-[#F3EFDA]">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#F3EFDA] mb-2">{cls.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-[#F3EFDA]/70 mb-2">
                                            <Users className="w-4 h-4" />
                                            <span>{cls.students} Students</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-[#F3EFDA]/60">
                                            <Calendar className="w-3 h-3" />
                                            <span>{cls.schedule}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Assignments */}
                        <div className="scale-in bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 border border-[#F3EFDA]/20" style={{ animationDelay: '0.2s' }}>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-[#F3EFDA]">Recent Assignments</h2>
                                <div className="relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#F3EFDA]/50" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-10 pr-4 py-2 bg-[#3B132A]/50 border border-[#F3EFDA]/20 rounded-lg text-sm text-[#F3EFDA] placeholder-[#F3EFDA]/50 focus:outline-none focus:border-[#F3EFDA]/40"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                {recentAssignments.map((assignment, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#3B132A]/50 rounded-lg p-4 border border-[#F3EFDA]/10 hover:border-[#F3EFDA]/30 transition-all"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-[#F3EFDA] mb-1">{assignment.title}</h3>
                                                <p className="text-sm text-[#F3EFDA]/60">{assignment.class}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${assignment.status === 'active' ? 'bg-green-500/20 text-green-400' :
                                                    assignment.status === 'grading' ? 'bg-yellow-500/20 text-yellow-400' :
                                                        'bg-gray-500/20 text-gray-400'
                                                }`}>
                                                {assignment.status === 'active' && <Clock className="w-3 h-3 inline mr-1" />}
                                                {assignment.status === 'grading' && <AlertCircle className="w-3 h-3 inline mr-1" />}
                                                {assignment.status === 'draft' && <FileText className="w-3 h-3 inline mr-1" />}
                                                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-4">
                                                <span className="text-[#F3EFDA]/70">Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                                                <span className="text-[#F3EFDA]/70">
                                                    {assignment.submitted}/{assignment.total} submitted
                                                </span>
                                            </div>
                                            <div className="w-24 bg-[#F3EFDA]/20 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                                    style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Calendar/Upcoming Events */}
                        <div className="scale-in bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 border border-[#F3EFDA]/20" style={{ animationDelay: '0.3s' }}>
                            <h2 className="text-xl font-bold text-[#F3EFDA] mb-6">Upcoming Events</h2>
                            <div className="space-y-4">
                                {upcomingEvents.map((event, index) => (
                                    <div key={index} className="bg-[#3B132A]/50 rounded-lg p-4 border border-[#F3EFDA]/10">
                                        <div className="flex items-start gap-3">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${event.type === 'exam' ? 'bg-red-500/20' :
                                                    event.type === 'meeting' ? 'bg-blue-500/20' :
                                                        'bg-purple-500/20'
                                                }`}>
                                                {event.type === 'exam' && <AlertCircle className="w-5 h-5 text-red-400" />}
                                                {event.type === 'meeting' && <Users className="w-5 h-5 text-blue-400" />}
                                                {event.type === 'event' && <Calendar className="w-5 h-5 text-purple-400" />}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-[#F3EFDA] mb-1">{event.title}</h3>
                                                <p className="text-sm text-[#F3EFDA]/60">{event.date}</p>
                                                <p className="text-xs text-[#F3EFDA]/50 mt-1">{event.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="scale-in bg-[#F3EFDA]/10 backdrop-blur-sm rounded-xl p-6 border border-[#F3EFDA]/20" style={{ animationDelay: '0.4s' }}>
                            <h2 className="text-xl font-bold text-[#F3EFDA] mb-6">Quick Actions</h2>
                            <div className="space-y-3">
                                <button className="w-full flex items-center gap-3 p-3 bg-[#3B132A]/50 rounded-lg border border-[#F3EFDA]/10 hover:bg-[#3B132A]/70 hover:border-[#F3EFDA]/30 transition-all text-left">
                                    <Plus className="w-5 h-5 text-[#F3EFDA]" />
                                    <span className="text-[#F3EFDA]">Create Assignment</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-[#3B132A]/50 rounded-lg border border-[#F3EFDA]/10 hover:bg-[#3B132A]/70 hover:border-[#F3EFDA]/30 transition-all text-left">
                                    <FileText className="w-5 h-5 text-[#F3EFDA]" />
                                    <span className="text-[#F3EFDA]">Grade Submissions</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-[#3B132A]/50 rounded-lg border border-[#F3EFDA]/10 hover:bg-[#3B132A]/70 hover:border-[#F3EFDA]/30 transition-all text-left">
                                    <Calendar className="w-5 h-5 text-[#F3EFDA]" />
                                    <span className="text-[#F3EFDA]">Schedule Class</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-[#3B132A]/50 rounded-lg border border-[#F3EFDA]/10 hover:bg-[#3B132A]/70 hover:border-[#F3EFDA]/30 transition-all text-left">
                                    <Users className="w-5 h-5 text-[#F3EFDA]" />
                                    <span className="text-[#F3EFDA]">View Students</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;