import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, X, Send, CheckCircle } from 'lucide-react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [notification, setNotification] = useState(null)

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type })
        setTimeout(() => {
            setNotification(null)
        }, 5000)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = validateForm()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
            showNotification('Thank you! Your message has been sent successfully.', 'success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        }, 1500)
    }

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            title: "Phone",
            details: "+1 (555) 123-4567",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            details: "support@company.com",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Address",
            details: "123 Business St, Suite 100, New York, NY 10001",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Hours",
            details: "Mon - Fri: 9:00 AM - 6:00 PM",
            color: "from-green-500 to-green-600"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F3EFDA] via-[#FFFDF6] to-[#F3EFDA] py-16 px-4 relative overflow-hidden">
            <style>{`
                .fade-in { opacity: 0; animation: fadeIn 0.6s ease forwards; }
                @keyframes fadeIn { to { opacity: 1; } }
                
                .slide-up { opacity: 0; transform: translateY(20px); animation: slideUp 0.5s ease forwards; }
                @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
                
                .slide-left { opacity: 0; transform: translateX(-30px); animation: slideLeft 0.6s ease forwards; }
                @keyframes slideLeft { to { opacity: 1; transform: translateX(0); } }
                
                .slide-right { opacity: 0; transform: translateX(30px); animation: slideRight 0.6s ease forwards; }
                @keyframes slideRight { to { opacity: 1; transform: translateX(0); } }
                
                .scale-in { opacity: 0; transform: scale(0.9); animation: scaleIn 0.5s ease forwards; }
                @keyframes scaleIn { to { opacity: 1; transform: scale(1); } }
                
                .rotate-spin { animation: spin 1s linear infinite; }
                @keyframes spin { to { transform: rotate(360deg); } }
                
                .notification-enter { animation: notificationEnter 0.3s ease; }
                @keyframes notificationEnter { 
                    from { transform: translateY(-100px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                .transition-all { transition: all 0.3s ease; }
                .error-enter { animation: errorShake 0.4s ease; }
                @keyframes errorShake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
            `}</style>

            {/* Background Circles */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-20 left-20 w-64 h-64 bg-purple-300 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl" />
            </div>

            {/* Toast Notification */}
            {notification && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 notification-enter">
                    <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl ${notification.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                        } min-w-[320px] max-w-md`}>
                        <CheckCircle className="w-5 h-5" />
                        <div className="flex-1">
                            <p className="font-medium">{notification.message}</p>
                        </div>
                        <button
                            onClick={() => setNotification(null)}
                            className="hover:opacity-70 transition-opacity"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 fade-in">
                    <div className="inline-block mb-4 scale-in">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#3B132A] to-[#2A0E1F] rounded-2xl flex items-center justify-center mx-auto">
                            <Mail className="w-8 h-8 text-[#F3EFDA]" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-[#3B132A] mb-3">
                        Contact Us
                    </h1>
                    <p className="text-[#3B132A]/70 text-lg">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Contact Form */}
                    <div className="md:col-span-3 bg-white rounded-xl shadow-lg p-8 slide-left">
                        <h2 className="text-2xl font-semibold text-[#3B132A] mb-6">Send a Message</h2>

                        <div className="space-y-5">
                            <div className="slide-up" style={{ animationDelay: '0.1s' }}>
                                <label className="block text-sm font-medium text-[#3B132A] mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B132A]/20 focus:border-[#3B132A] bg-[#3B132A] text-[#F3EFDA] placeholder-[#F3EFDA]/70 transition-all`}
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600 error-enter">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
                                <label className="block text-sm font-medium text-[#3B132A] mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B132A]/20 focus:border-[#3B132A] bg-[#3B132A] text-[#F3EFDA] placeholder-[#F3EFDA]/70 transition-all`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600 error-enter">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="slide-up" style={{ animationDelay: '0.3s' }}>
                                <label className="block text-sm font-medium text-[#3B132A] mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B132A]/20 focus:border-[#3B132A] bg-[#3B132A] text-[#F3EFDA] placeholder-[#F3EFDA]/70 transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
                                <label className="block text-sm font-medium text-[#3B132A] mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B132A]/20 focus:border-[#3B132A] resize-none bg-[#3B132A] text-[#F3EFDA] placeholder-[#F3EFDA]/70 transition-all`}
                                    placeholder="How can we help you?"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600 error-enter">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`w-full bg-[#3B132A] text-[#F3EFDA] font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 slide-up ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#2A0E1F] hover:scale-105'
                                    }`}
                                style={{ animationDelay: '0.5s' }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-[#F3EFDA]/30 border-t-[#F3EFDA] rounded-full rotate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="md:col-span-2 space-y-6 slide-right" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:scale-105">
                            <h2 className="text-xl font-semibold text-[#3B132A] mb-6">Contact Info</h2>
                            <div className="space-y-5">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 transition-all hover:translate-x-1"
                                    >
                                        <div className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-[#3B132A] text-sm">{info.title}</h3>
                                            <p className="text-[#3B132A]/70 text-sm mt-1">{info.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#3B132A] to-[#2A0E1F] rounded-xl shadow-lg p-6 text-center transition-all hover:scale-105">
                            <h3 className="text-lg font-semibold text-[#F3EFDA] mb-2">Quick Support</h3>
                            <p className="text-[#F3EFDA]/80 text-sm mb-4">
                                Need immediate assistance? Our team is here to help.
                            </p>
                            <button className="w-full bg-[#F3EFDA] text-[#3B132A] font-medium py-2.5 px-4 rounded-lg hover:bg-white transition-all hover:scale-105">
                                Live Chat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs