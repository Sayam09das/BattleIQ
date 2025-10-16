import React, { useState } from 'react';
import { Trophy, Star, Medal, Users, Target, Brain, TrendingUp, Award, MapPin, Zap, CheckCircle, Calendar } from 'lucide-react';

// Data
const topPerformers = [
    {
        id: 1,
        name: "Rohan Mehta",
        country: "India",
        image: "🏆",
        points: 9850,
        rank: 1,
        badge: "Gold",
        category: "Science Master",
        streak: 45
    },
    {
        id: 2,
        name: "Sarah Chen",
        country: "Singapore",
        image: "🥈",
        points: 9720,
        rank: 2,
        badge: "Silver",
        category: "Tech Wizard",
        streak: 38
    },
    {
        id: 3,
        name: "Miguel Santos",
        country: "Brazil",
        image: "🥉",
        points: 9560,
        rank: 3,
        badge: "Bronze",
        category: "History Expert",
        streak: 32
    },
    {
        id: 4,
        name: "Fatima Khan",
        country: "Pakistan",
        image: "⭐",
        points: 9340,
        rank: 4,
        badge: "Elite",
        category: "GK Champion",
        streak: 28
    },
    {
        id: 5,
        name: "David Wilson",
        country: "USA",
        image: "💎",
        points: 9180,
        rank: 5,
        badge: "Elite",
        category: "Sports Guru",
        streak: 25
    },
    {
        id: 6,
        name: "Yuki Tanaka",
        country: "Japan",
        image: "🌟",
        points: 9020,
        rank: 6,
        badge: "Elite",
        category: "Math Prodigy",
        streak: 22
    }
];

const testimonials = [
    {
        name: "Aarav Sharma",
        role: "College Student",
        comment: "BattleIQ helped me boost my quiz skills and confidence! The real-time competition pushed me to learn faster and retain more. Now I'm in the top 50 globally!",
        image: "👨‍🎓",
        rating: 5,
        achievement: "Top 50 Player"
    },
    {
        name: "Priya Sen",
        role: "Quiz Enthusiast",
        comment: "Loved the leaderboard and competition. Super engaging! The analytics feature helped me identify my weak areas and improve systematically.",
        image: "👩‍💼",
        rating: 5,
        achievement: "100+ Wins"
    },
    {
        name: "Arjun Patel",
        role: "Software Engineer",
        comment: "Best quiz platform I've used! The variety of topics and difficulty levels keeps me coming back. Perfect for quick brain training during breaks.",
        image: "👨‍💻",
        rating: 5,
        achievement: "Tech Master"
    },
    {
        name: "Sneha Gupta",
        role: "Teacher",
        comment: "I recommend BattleIQ to all my students. It's educational, competitive, and incredibly fun. The achievement system motivates continuous learning.",
        image: "👩‍🏫",
        rating: 5,
        achievement: "500+ Quizzes"
    }
];

const achievements = [
    { icon: <Target className="w-8 h-8" />, value: "100K+", label: "Quizzes Played" },
    { icon: <Users className="w-8 h-8" />, value: "10K+", label: "Active Players" },
    { icon: <Brain className="w-8 h-8" />, value: "50+", label: "Quiz Categories" },
    { icon: <Trophy className="w-8 h-8" />, value: "25K+", label: "Medals Earned" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "95%", label: "User Satisfaction" },
    { icon: <Zap className="w-8 h-8" />, value: "500K+", label: "Questions Answered" }
];

const journeySteps = [
    {
        title: "Welcome Aboard",
        description: "Create your account and explore quiz categories",
        icon: <CheckCircle className="w-6 h-6" />,
        status: "complete"
    },
    {
        title: "First Victory",
        description: "Complete your first quiz and earn your first badge",
        icon: <Medal className="w-6 h-6" />,
        status: "complete"
    },
    {
        title: "Rising Star",
        description: "Enter the top 100 leaderboard in your category",
        icon: <Star className="w-6 h-6" />,
        status: "complete"
    },
    {
        title: "Elite Player",
        description: "Win 50+ quizzes and unlock exclusive challenges",
        icon: <Award className="w-6 h-6" />,
        status: "complete"
    },
    {
        title: "Legend Status",
        description: "Reach top 10 globally and inspire others",
        icon: <Trophy className="w-6 h-6" />,
        status: "active"
    }
];

// Components
const PageHeader = ({ title, subtitle }) => (
    <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#F3EFDA' }}></div>
        </div>
        <div className="relative">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6 border-2" style={{ backgroundColor: '#3B132A', borderColor: '#F3EFDA33' }}>
                <Trophy className="w-5 h-5" style={{ color: '#F3EFDA' }} />
                <span className="font-semibold" style={{ color: '#F3EFDA' }}>Hall of Fame</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: '#F3EFDA' }}>
                {title}
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-70" style={{ color: '#F3EFDA' }}>
                {subtitle}
            </p>
        </div>
    </div>
);

const TopPerformerCard = ({ performer }) => {
    const getBadgeColor = (badge) => {
        switch (badge) {
            case 'Gold': return 'from-yellow-200 to-yellow-400';
            case 'Silver': return 'from-gray-200 to-gray-300';
            case 'Bronze': return 'from-orange-200 to-orange-300';
            default: return 'from-amber-100 to-amber-200';
        }
    };

    return (
        <div
            className="group relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: '#3B132A', borderColor: '#F3EFDA33' }}
        >
            <div className="absolute top-4 right-4 text-4xl font-black opacity-10" style={{ color: '#F3EFDA' }}>
                #{performer.rank}
            </div>

            <div className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${getBadgeColor(performer.badge)} flex items-center justify-center text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 border-4`} style={{ borderColor: '#F3EFDA22' }}>
                    {performer.image}
                </div>

                <h3 className="text-2xl font-bold mb-1" style={{ color: '#F3EFDA' }}>
                    {performer.name}
                </h3>

                <div className="flex items-center gap-2 mb-4 opacity-70">
                    <MapPin className="w-4 h-4" style={{ color: '#F3EFDA' }} />
                    <span className="text-sm" style={{ color: '#F3EFDA' }}>{performer.country}</span>
                </div>

                <div className="w-full rounded-xl p-4 mb-4" style={{ backgroundColor: '#F3EFDA11' }}>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm opacity-70" style={{ color: '#F3EFDA' }}>Total Points</span>
                        <span className="text-2xl font-bold" style={{ color: '#F3EFDA' }}>{performer.points.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm opacity-70" style={{ color: '#F3EFDA' }}>Win Streak</span>
                        <div className="flex items-center gap-1">
                            <Zap className="w-4 h-4" style={{ color: '#F3EFDA' }} />
                            <span className="font-bold" style={{ color: '#F3EFDA' }}>{performer.streak}</span>
                        </div>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#F3EFDA', color: '#3B132A' }}>
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">{performer.category}</span>
                </div>
            </div>
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => (
    <div
        className="rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105"
        style={{ backgroundColor: '#3B132A', borderColor: '#F3EFDA33' }}
    >
        <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl">{testimonial.image}</div>
            <div className="flex-1">
                <h4 className="text-xl font-bold mb-1" style={{ color: '#F3EFDA' }}>
                    {testimonial.name}
                </h4>
                <p className="text-sm opacity-60" style={{ color: '#F3EFDA' }}>
                    {testimonial.role}
                </p>
                <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F3EFDA' }} />
                    ))}
                </div>
            </div>
        </div>

        <p className="mb-4 leading-relaxed opacity-80" style={{ color: '#F3EFDA' }}>
            "{testimonial.comment}"
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#F3EFDA22' }}>
            <Trophy className="w-4 h-4" style={{ color: '#F3EFDA' }} />
            <span className="text-sm font-semibold" style={{ color: '#F3EFDA' }}>{testimonial.achievement}</span>
        </div>
    </div>
);

const AchievementCard = ({ achievement }) => (
    <div
        className="rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 border-2"
        style={{ backgroundColor: '#3B132A', borderColor: '#F3EFDA22' }}
    >
        <div className="flex justify-center mb-4" style={{ color: '#F3EFDA' }}>
            {achievement.icon}
        </div>
        <div className="text-4xl font-black mb-2" style={{ color: '#F3EFDA' }}>
            {achievement.value}
        </div>
        <div className="text-sm font-medium opacity-60" style={{ color: '#F3EFDA' }}>
            {achievement.label}
        </div>
    </div>
);

const JourneyTimeline = () => (
    <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 opacity-20" style={{ backgroundColor: '#F3EFDA' }}></div>

        {journeySteps.map((step, index) => (
            <div key={index} className="relative flex gap-6 mb-8 last:mb-0">
                <div
                    className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 flex-shrink-0"
                    style={{
                        backgroundColor: step.status === 'active' ? '#F3EFDA' : '#3B132A',
                        borderColor: '#F3EFDA',
                        color: step.status === 'active' ? '#3B132A' : '#F3EFDA'
                    }}
                >
                    {step.icon}
                </div>

                <div
                    className="flex-1 rounded-xl p-6 border-2"
                    style={{ backgroundColor: '#3B132A', borderColor: '#F3EFDA33' }}
                >
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#F3EFDA' }}>
                        {step.title}
                    </h3>
                    <p className="opacity-70" style={{ color: '#F3EFDA' }}>
                        {step.description}
                    </p>
                    {step.status === 'active' && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-4" style={{ backgroundColor: '#F3EFDA', color: '#3B132A' }}>
                            <span className="text-sm font-semibold">Current Stage</span>
                        </div>
                    )}
                </div>
            </div>
        ))}
    </div>
);

const JoinNowCTA = () => (
    <div
        className="relative overflow-hidden rounded-3xl p-12 text-center border-2"
        style={{ backgroundColor: '#2a0d1e', borderColor: '#F3EFDA33' }}
    >
        <div className="relative">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#F3EFDA20' }}>
                <Trophy className="w-12 h-12 animate-bounce" style={{ color: '#F3EFDA' }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F3EFDA' }}>
                Ready to Write Your Success Story?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-70" style={{ color: '#F3EFDA' }}>
                Join thousands of players who are already competing, learning, and conquering on BattleIQ. Your journey to the top starts now!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <button
                    className="px-10 py-4 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-110 border-2"
                    style={{
                        backgroundColor: '#F3EFDA',
                        color: '#3B132A',
                        borderColor: '#F3EFDA',
                        boxShadow: '0 10px 40px rgba(243, 239, 218, 0.3)'
                    }}
                >
                    Start Your Journey
                </button>
                <button
                    className="px-10 py-4 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-110 border-2"
                    style={{
                        backgroundColor: 'transparent',
                        color: '#F3EFDA',
                        borderColor: '#F3EFDA'
                    }}
                >
                    View Leaderboard
                </button>
            </div>
        </div>
    </div>
);

// Main Page Component
const SuccessStoriesPage = () => {
    return (
        <div
            className="min-h-screen py-20 px-4"
            style={{ background: 'linear-gradient(to bottom, #3B132A, #2a0d1e, #1a0812)' }}
        >
            <div className="max-w-7xl mx-auto">
                <PageHeader
                    title="Success Stories"
                    subtitle="Meet our top players who conquered challenges and achieved greatness on BattleIQ. Their dedication, skill, and passion inspire our entire community."
                />

                {/* Top Performers Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Medal className="w-8 h-8" style={{ color: '#F3EFDA' }} />
                        <h2 className="text-3xl font-black" style={{ color: '#F3EFDA' }}>
                            Top Performers This Month
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topPerformers.map((performer) => (
                            <TopPerformerCard key={performer.id} performer={performer} />
                        ))}
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Target className="w-8 h-8" style={{ color: '#F3EFDA' }} />
                        <h2 className="text-3xl font-black" style={{ color: '#F3EFDA' }}>
                            Platform Milestones
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {achievements.map((achievement, index) => (
                            <AchievementCard key={index} achievement={achievement} />
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Star className="w-8 h-8" style={{ color: '#F3EFDA' }} />
                        <h2 className="text-3xl font-black" style={{ color: '#F3EFDA' }}>
                            What Our Players Say
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </section>

                {/* Journey Timeline Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <TrendingUp className="w-8 h-8" style={{ color: '#F3EFDA' }} />
                        <h2 className="text-3xl font-black" style={{ color: '#F3EFDA' }}>
                            Your Journey to Greatness
                        </h2>
                    </div>
                    <div
                        className="rounded-2xl p-8 border-2"
                        style={{ backgroundColor: '#3B132A', borderColor: '#F3EFDA22' }}
                    >
                        <JourneyTimeline />
                    </div>
                </section>

                {/* CTA Section */}
                <JoinNowCTA />
            </div>
        </div>
    );
};

export default SuccessStoriesPage;