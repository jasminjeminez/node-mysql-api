// send-email.ts
import nodemailer from 'nodemailer';

export default async function sendEmail({ to, subject, html, from = process.env.EMAIL_FROM }: any) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
        const info = await transporter.sendMail({ from, to, subject, html });
        console.log('Email sent:', info.messageId);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Email error:', error); // ✅ log but don't throw
        // ✅ Remove "throw error" — don't crash registration
    }
}