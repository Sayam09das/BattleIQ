require('dotenv').config(); // <- must be first
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, text, html = null) => {
    try {
        const response = await resend.emails.send({
            from: process.env.MAIL_FROM || "BattleIQ <noreply@resend.dev>",
            to,
            subject,
            text,
            html,
        });
        console.log(`✅ Email sent to ${to}`);
        console.log("Resend response:", response);
        return response;
    } catch (error) {
        console.error("❌ Error sending email:", error);
        throw error;
    }
};

module.exports = sendEmail;
