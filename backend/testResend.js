require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

(async () => {
    try {
        const response = await resend.emails.send({
            from: "BattleIQ <noreply@resend.dev>",
            to: "sayamprogrammingworld@gmail.com",
            subject: "Test Resend Email",
            text: "Hello! This is a test email.",
            html: "<p>Hello! This is a <b>test email</b>.</p>",
        });
        console.log("✅ Test email sent:", response);
    } catch (err) {
        console.error("❌ Test email error:", err);
    }
})();
