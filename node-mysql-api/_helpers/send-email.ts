import nodemailer from 'nodemailer';
import config from '../config.json';

export default async function sendEmail({ to, subject, html, from = config.emailFrom }: any) {
    process.stdout.write('SMTP CONFIG: ' + JSON.stringify(config.smtpOptions) + '\n');
    const transporter = nodemailer.createTransport(config.smtpOptions as any);
    await transporter.sendMail({ from, to, subject, html });
}