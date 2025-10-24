const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, text) => {
    try {
        await resend.emails.send({
            from: process.env.MAIL_FROM,
            to,
            subject,
            text,
        });
        console.log(`✅ Email sent to ${to}`);
    } catch (error) {
        console.error('❌ Error sending email:', error);
        throw error;
    }
};

module.exports = sendEmail;
