import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#3B132A]">

            {/* 🌸 Simple Geometric Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large Circle - Top Left */}
                <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />

                {/* Large Circle - Bottom Right */}
                <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border-2 border-[#F3EFDA]/8" />
            </div>

            {/* Content Section */}
            <div className="relative max-w-3xl w-full z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#F3EFDA] mb-3 drop-shadow-md">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[#F3EFDA]/80 text-lg">
                        Find answers to common questions about our services
                    </p>
                </div>

                {/* Accordion Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#F3EFDA]/10 backdrop-blur-sm border border-[#F3EFDA]/20 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#F3EFDA]/40"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#F3EFDA]/40 focus:ring-offset-2 focus:ring-offset-[#3B132A]"
                            >
                                <span className="text-lg font-semibold text-[#F3EFDA] pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[#F3EFDA] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 pt-2 bg-[#3B132A]/70">
                                    <p className="text-[#F3EFDA]/90 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
