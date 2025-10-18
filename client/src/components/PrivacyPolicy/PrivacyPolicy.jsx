import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#F3EFDA] min-h-screen p-6 md:p-12">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3B132A] mb-6">
                    Privacy Policy
                </h1>
                <p className="text-[#3B132A] text-lg md:text-xl mb-6">
                    At <span className="font-semibold">BattleIQ</span>, we value your privacy and are committed
                    to protecting your personal information. This Privacy Policy explains how we collect,
                    use, and safeguard your data when you use our website and services.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#3B132A] mt-8 mb-4">
                    1. Information We Collect
                </h2>
                <ul className="list-disc list-inside text-[#3B132A] mb-6">
                    <li>Personal information you provide during registration (name, email, username).</li>
                    <li>Quiz activity and performance data to improve user experience.</li>
                    <li>Technical data such as IP address, browser type, and device information.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#3B132A] mt-8 mb-4">
                    2. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside text-[#3B132A] mb-6">
                    <li>To provide and personalize our quiz platform services.</li>
                    <li>To improve our website and develop new features.</li>
                    <li>To communicate with you about updates, promotions, or support.</li>
                    <li>To monitor and analyze usage for security and analytics purposes.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#3B132A] mt-8 mb-4">
                    3. Data Sharing and Disclosure
                </h2>
                <p className="text-[#3B132A] mb-6">
                    We do not sell or rent your personal information to third parties. We may share data with trusted service
                    providers who assist us in operating the website or providing services, under strict confidentiality agreements.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#3B132A] mt-8 mb-4">
                    4. Cookies
                </h2>
                <p className="text-[#3B132A] mb-6">
                    We use cookies to enhance your browsing experience, track quiz performance, and remember user preferences.
                    By using our website, you consent to the use of cookies.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#3B132A] mt-8 mb-4">
                    5. Your Rights
                </h2>
                <p className="text-[#3B132A] mb-6">
                    You have the right to access, correct, or delete your personal information. You can also opt-out of
                    receiving promotional communications by contacting us.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#3B132A] mt-8 mb-4">
                    6. Contact Us
                </h2>
                <p className="text-[#3B132A] mb-6">
                    If you have any questions regarding this Privacy Policy or how your data is handled, you can contact us at:
                    <span className="font-semibold"> support@battleiq.com</span>
                </p>

                <p className="text-[#3B132A] italic mt-8">
                    Last updated: October 2025
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
