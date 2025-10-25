// backend/utils/sendEmail.js
const axios = require("axios");

const sendEmail = async (to, subject, message) => {
    try {
        await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: process.env.EMAILJS_SERVICE_ID,   // your EmailJS Service ID
            template_id: process.env.EMAILJS_TEMPLATE_ID, // your EmailJS Template ID
            user_id: process.env.EMAILJS_PUBLIC_KEY,      // your EmailJS Public Key
            template_params: {
                to,        // {{to}} in your EmailJS template
                subject,   // {{subject}} in your EmailJS template
                message,   // {{message}} in your EmailJS template
            },
        });

        console.log(`✅ Email sent to ${to}`);
    } catch (error) {
        console.error("❌ Error sending email:", error.response?.data || error.message);
        throw new Error("Email not sent");
    }
};

module.exports = sendEmail;
