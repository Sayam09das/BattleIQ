import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all unused items in their original packaging. Please contact our support team to initiate a return."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by location."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay for your convenience."
        }
    ]

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-[#3B132A] py-16">
            <style>{`
                .fade-in { opacity: 0; animation: fadeIn 0.6s ease forwards; }
                @keyframes fadeIn { to { opacity: 1; } }
                
                .slide-up { opacity: 0; transform: translateY(20px); animation: slideUp 0.5s ease forwards; }
                @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
                
                .accordion-enter { 
                    max-height: 0; 
                    opacity: 0;
                    transition: max-height 0.3s ease, opacity 0.3s ease;
                }
                .accordion-enter-active { 
                    max-height: 500px; 
                    opacity: 1;
                }
                
                .rotate-180 { transform: rotate(180deg); }
                .transition-transform { transition: transform 0.3s ease; }
                .transition-all { transition: all 0.3s ease; }
            `}</style>

            {/* Background Circles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
            </div>

            {/* Content Section */}
            <div className="relative max-w-3xl w-full z-10">
                {/* Header */}
                <div className="text-center mb-12 fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HelpCircle className="w-10 h-10 text-[#F3EFDA]" />
                        <h1 className="text-4xl font-bold text-[#F3EFDA]">
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <p className="text-[#F3EFDA]/80 text-lg">
                        Find answers to common questions about our services
                    </p>
                </div>

                {/* Accordion Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative bg-[#F3EFDA]/10 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:border-[#F3EFDA]/40 hover:bg-[#F3EFDA]/15">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-3">
                                        <MessageCircle className="w-5 h-5 text-[#F3EFDA]/70" />
                                        <span className="text-lg font-semibold text-[#F3EFDA] pr-4">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#F3EFDA] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <div className={`accordion-enter ${openIndex === index ? 'accordion-enter-active' : ''}`}>
                                    {openIndex === index && (
                                        <div className="px-6 pb-5 pt-2 bg-[#3B132A]/70">
                                            <p className="text-[#F3EFDA]/90 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-12 text-center fade-in" style={{ animationDelay: '0.6s' }}>
                    <p className="text-[#F3EFDA]/70 text-sm">
                        Still have questions? Contact our support team
                    </p>
                    <button className="mt-4 px-6 py-3 bg-[#F3EFDA] text-[#3B132A] font-semibold rounded-lg transition-all hover:bg-[#F3EFDA]/90 hover:scale-105">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Faq