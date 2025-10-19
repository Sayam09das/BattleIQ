import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, Code, Palette, GraduationCap, Users, Heart, Zap, Globe, TrendingUp, Coffee, Award, MapPin, Clock, DollarSign, Send, ChevronRight, Target, Rocket, Star } from 'lucide-react'

const Careers = () => {
    const { scrollY } = useScroll()
    const yCircleLeft = useTransform(scrollY, [0, 500], [0, 150])
    const yCircleRight = useTransform(scrollY, [0, 500], [0, -150])

    const [selectedJob, setSelectedJob] = useState(null)
    const [activeCategory, setActiveCategory] = useState('all')

    const jobs = [
        {
            id: 1,
            title: "Senior Full-Stack Developer",
            department: "Engineering",
            type: "Full-Time",
            location: "San Francisco, CA / Remote",
            salary: "$140k - $180k",
            icon: Code,
            color: "from-blue-400/20 to-blue-600/20",
            description: "Build scalable quiz platform features and AI-powered educational tools.",
            requirements: [
                "5+ years experience with React, Node.js, and TypeScript",
                "Experience with real-time systems and WebSockets",
                "Strong understanding of database design (PostgreSQL, MongoDB)",
                "Cloud infrastructure experience (AWS/GCP)",
                "Passion for education technology"
            ],
            responsibilities: [
                "Design and implement new platform features",
                "Optimize performance for millions of users",
                "Collaborate with product and design teams",
                "Mentor junior developers",
                "Participate in architecture decisions"
            ]
        },
        {
            id: 2,
            title: "Product Designer",
            department: "Design",
            type: "Full-Time",
            location: "New York, NY / Remote",
            salary: "$110k - $150k",
            icon: Palette,
            color: "from-purple-400/20 to-purple-600/20",
            description: "Create beautiful, intuitive experiences that make learning engaging and fun.",
            requirements: [
                "4+ years product design experience",
                "Strong portfolio showcasing UX/UI work",
                "Proficiency in Figma and design systems",
                "Experience with user research and testing",
                "Understanding of accessibility standards"
            ],
            responsibilities: [
                "Design user-centered quiz and learning experiences",
                "Create and maintain design system",
                "Conduct user research and usability testing",
                "Collaborate with engineering and product teams",
                "Design mobile and web interfaces"
            ]
        },
        {
            id: 3,
            title: "Educational Content Strategist",
            department: "Content",
            type: "Full-Time",
            location: "Remote",
            salary: "$90k - $120k",
            icon: GraduationCap,
            color: "from-green-400/20 to-green-600/20",
            description: "Develop engaging quiz content and educational strategies for diverse subjects.",
            requirements: [
                "Background in education or curriculum development",
                "3+ years content strategy experience",
                "Strong writing and research skills",
                "Understanding of pedagogy and learning science",
                "Experience with EdTech platforms"
            ],
            responsibilities: [
                "Develop quiz content across multiple subjects",
                "Create learning pathways and curricula",
                "Collaborate with subject matter experts",
                "Analyze content performance and engagement",
                "Ensure educational quality and accuracy"
            ]
        },
        {
            id: 4,
            title: "AI/ML Engineer",
            department: "Engineering",
            type: "Full-Time",
            location: "San Francisco, CA",
            salary: "$150k - $200k",
            icon: Zap,
            color: "from-yellow-400/20 to-yellow-600/20",
            description: "Build intelligent systems for personalized learning and AI quiz generation.",
            requirements: [
                "MS/PhD in Computer Science or related field",
                "3+ years ML/AI experience",
                "Expertise in NLP and generative AI",
                "Experience with PyTorch or TensorFlow",
                "Published research or strong portfolio"
            ],
            responsibilities: [
                "Develop AI quiz generation algorithms",
                "Build personalized learning recommendation systems",
                "Optimize ML models for production",
                "Research and implement latest AI techniques",
                "Collaborate with engineering and product teams"
            ]
        },
        {
            id: 5,
            title: "DevOps Engineer",
            department: "Engineering",
            type: "Full-Time",
            location: "Remote",
            salary: "$130k - $170k",
            icon: Globe,
            color: "from-orange-400/20 to-orange-600/20",
            description: "Maintain and scale infrastructure supporting millions of quiz enthusiasts.",
            requirements: [
                "4+ years DevOps/SRE experience",
                "Expert in Kubernetes and Docker",
                "Cloud platform expertise (AWS/GCP/Azure)",
                "Infrastructure as Code (Terraform, CloudFormation)",
                "Strong monitoring and observability skills"
            ],
            responsibilities: [
                "Manage and scale cloud infrastructure",
                "Implement CI/CD pipelines",
                "Monitor system health and performance",
                "Ensure security and compliance",
                "Optimize costs and resource utilization"
            ]
        },
        {
            id: 6,
            title: "Marketing Manager",
            department: "Marketing",
            type: "Full-Time",
            location: "Remote",
            salary: "$100k - $130k",
            icon: TrendingUp,
            color: "from-pink-400/20 to-pink-600/20",
            description: "Drive growth and build brand awareness for BattleIQ globally.",
            requirements: [
                "5+ years marketing experience",
                "Proven track record in digital marketing",
                "Experience with EdTech or SaaS products",
                "Strong analytical and creative skills",
                "Excellent communication abilities"
            ],
            responsibilities: [
                "Develop and execute marketing strategies",
                "Manage digital campaigns and SEO/SEM",
                "Build partnerships with educational institutions",
                "Analyze metrics and optimize campaigns",
                "Lead content marketing initiatives"
            ]
        }
    ]

    const internships = [
        {
            id: 1,
            title: "Software Engineering Intern",
            duration: "Summer 2025 (12 weeks)",
            location: "San Francisco, CA",
            stipend: "$8k/month",
            icon: Code
        },
        {
            id: 2,
            title: "Product Design Intern",
            duration: "Summer 2025 (12 weeks)",
            location: "Remote",
            stipend: "$7k/month",
            icon: Palette
        },
        {
            id: 3,
            title: "Data Science Intern",
            duration: "Summer 2025 (12 weeks)",
            location: "San Francisco, CA",
            stipend: "$8.5k/month",
            icon: TrendingUp
        }
    ]

    const benefits = [
        { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage" },
        { icon: DollarSign, title: "Competitive Salary", desc: "Top-of-market compensation plus equity" },
        { icon: Coffee, title: "Flexible Work", desc: "Remote-first culture with flexible hours" },
        { icon: GraduationCap, title: "Learning Budget", desc: "$2,000 annual professional development" },
        { icon: Globe, title: "Global Team", desc: "Work with talent from 25+ countries" },
        { icon: Award, title: "Recognition", desc: "Performance bonuses and career growth" },
        { icon: Zap, title: "Latest Tech", desc: "MacBook Pro and home office setup" },
        { icon: Users, title: "Team Events", desc: "Quarterly offsites and virtual hangouts" }
    ]

    const values = [
        {
            icon: Target,
            title: "Mission-Driven",
            description: "We're passionate about making learning accessible and engaging for everyone worldwide."
        },
        {
            icon: Rocket,
            title: "Innovation First",
            description: "We embrace cutting-edge technology and aren't afraid to experiment with new ideas."
        },
        {
            icon: Users,
            title: "Collaborative Culture",
            description: "We believe the best solutions come from diverse perspectives working together."
        },
        {
            icon: Star,
            title: "Excellence Matters",
            description: "We hold ourselves to high standards and celebrate both learning and achievement."
        }
    ]

    const stats = [
        { value: "50+", label: "Team Members" },
        { value: "25+", label: "Countries" },
        { value: "3M+", label: "Active Users" },
        { value: "4.8★", label: "Glassdoor Rating" }
    ]

    const filteredJobs = activeCategory === 'all'
        ? jobs
        : jobs.filter(job => job.department.toLowerCase() === activeCategory)

    return (
        <div className="min-h-screen bg-[#3B132A] text-[#F3EFDA] overflow-hidden relative">
            {/* Animated Geometric Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleLeft }}
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8"
                    style={{ y: yCircleRight }}
                    animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#F3EFDA]/20"
                        style={{ left: `${20 + i * 20}%`, top: `${30 + i * 10}%` }}
                        animate={{ y: [-20, 20, -20], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-[#F3EFDA]/10 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-full px-6 py-2 mb-6"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(243, 239, 218, 0.1)",
                                "0 0 40px rgba(243, 239, 218, 0.2)",
                                "0 0 20px rgba(243, 239, 218, 0.1)"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Briefcase className="w-4 h-4 text-[#F3EFDA]" />
                        <span className="text-sm font-medium">Join Our Mission</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3EFDA] via-[#F3EFDA]/90 to-[#F3EFDA]/70 bg-clip-text text-transparent">
                        Careers at BattleIQ
                    </h1>
                    <p className="text-lg sm:text-xl text-[#F3EFDA]/80 max-w-3xl mx-auto">
                        Help us revolutionize education through gamification and AI. Join a team of passionate
                        innovators building the future of learning.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-4xl font-bold mb-2">{stat.value}</div>
                            <div className="text-sm text-[#F3EFDA]/70">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Our Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <value.icon className="w-12 h-12 text-[#F3EFDA] mx-auto mb-4" />
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-sm text-[#F3EFDA]/70">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Join BattleIQ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <benefit.icon className="w-10 h-10 text-[#F3EFDA] mb-4" />
                                <h3 className="font-bold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-[#F3EFDA]/70">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Job Category Filter */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {['all', 'engineering', 'design', 'content', 'marketing'].map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${activeCategory === category
                                        ? 'bg-[#F3EFDA] text-[#3B132A]'
                                        : 'bg-[#F3EFDA]/10 text-[#F3EFDA] border border-[#F3EFDA]/20 hover:bg-[#F3EFDA]/20'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Job Listings */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                    {filteredJobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            className={`relative bg-gradient-to-br ${job.color} backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6 cursor-pointer overflow-hidden`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedJob(job)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-3">
                                    <job.icon className="w-8 h-8" />
                                </div>
                                <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-xs font-semibold">
                                    {job.type}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                            <p className="text-[#F3EFDA]/70 text-sm mb-4">{job.description}</p>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <Briefcase className="w-4 h-4 text-[#F3EFDA]/60" />
                                    <span>{job.department}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="w-4 h-4 text-[#F3EFDA]/60" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <DollarSign className="w-4 h-4 text-[#F3EFDA]/60" />
                                    <span>{job.salary}</span>
                                </div>
                            </div>

                            <motion.button
                                className="w-full bg-[#F3EFDA] text-[#3B132A] font-bold py-3 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Details
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>

                            <motion.div
                                className="absolute -right-8 -top-8 w-32 h-32 bg-[#F3EFDA]/5 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Internships */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Internship Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {internships.map((internship, index) => (
                            <motion.div
                                key={internship.id}
                                className="bg-gradient-to-br from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-2xl p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <internship.icon className="w-12 h-12 text-[#F3EFDA] mb-4" />
                                <h3 className="text-xl font-bold mb-3">{internship.title}</h3>
                                <div className="space-y-2 text-sm mb-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-[#F3EFDA]/60" />
                                        <span>{internship.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-[#F3EFDA]/60" />
                                        <span>{internship.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="w-4 h-4 text-[#F3EFDA]/60" />
                                        <span>{internship.stipend}</span>
                                    </div>
                                </div>
                                <motion.button
                                    className="w-full bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 font-semibold py-3 rounded-xl hover:bg-[#F3EFDA]/30 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Apply Now
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center bg-gradient-to-r from-[#F3EFDA]/10 to-[#F3EFDA]/5 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Rocket className="w-16 h-16 text-[#F3EFDA] mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Don't See the Right Role?</h3>
                    <p className="text-[#F3EFDA]/80 mb-6 max-w-2xl mx-auto">
                        We're always looking for exceptional talent. Send us your resume and tell us
                        how you can contribute to our mission of revolutionizing education.
                    </p>
                    <motion.button
                        className="bg-[#F3EFDA] text-[#3B132A] font-bold px-8 py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Send className="w-5 h-5" />
                        Send General Application
                    </motion.button>
                    <div className="mt-6 text-sm text-[#F3EFDA]/60">
                        Or email us at: <span className="text-[#F3EFDA]">careers@battleiq.com</span>
                    </div>
                </motion.div>
            </div>

            {/* Job Detail Modal */}
            {selectedJob && (
                <motion.div
                    className="fixed inset-0 bg-[#3B132A]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedJob(null)}
                >
                    <motion.div
                        className="bg-[#3B132A] border-2 border-[#F3EFDA]/30 rounded-3xl p-8 max-w-3xl w-full my-8"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedJob(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-[#F3EFDA]/10 rounded-lg transition-all"
                        >
                            ✕
                        </button>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#F3EFDA]/10 border border-[#F3EFDA]/20 rounded-xl p-4">
                                <selectedJob.icon className="w-12 h-12" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-sm font-semibold">
                                        {selectedJob.department}
                                    </span>
                                    <span className="bg-[#F3EFDA]/20 border border-[#F3EFDA]/30 rounded-full px-3 py-1 text-sm font-semibold">
                                        {selectedJob.type}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-[#F3EFDA]/5 rounded-xl p-4">
                                <MapPin className="w-5 h-5 mb-2 text-[#F3EFDA]/60" />
                                <p className="text-sm text-[#F3EFDA]/70 mb-1">Location</p>
                                <p className="font-semibold">{selectedJob.location}</p>
                            </div>
                            <div className="bg-[#F3EFDA]/5 rounded-xl p-4">
                                <DollarSign className="w-5 h-5 mb-2 text-[#F3EFDA]/60" />
                                <p className="text-sm text-[#F3EFDA]/70 mb-1">Salary Range</p>
                                <p className="font-semibold">{selectedJob.salary}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-3">About the Role</h3>
                            <p className="text-[#F3EFDA]/80">{selectedJob.description}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-3">Requirements</h3>
                            <ul className="space-y-2">
                                {selectedJob.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-2 text-[#F3EFDA]/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2 flex-shrink-0" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-3">Responsibilities</h3>
                            <ul className="space-y-2">
                                {selectedJob.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start gap-2 text-[#F3EFDA]/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3EFDA]/60 mt-2 flex-shrink-0" />
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <motion.button
                            className="w-full bg-[#F3EFDA] text-[#3B132A] font-bold py-4 rounded-xl hover:bg-[#F3EFDA]/90 transition-all flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Send className="w-5 h-5" />
                            Apply for this Position
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default Careers