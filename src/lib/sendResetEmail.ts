import { getGmailTransporter } from "./mailer";

export async function sendResetEmail(to: string, link: string) {
  console.log("link", link);
  const transporter = await getGmailTransporter();
  await transporter.sendMail({
    from: `"My App" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Reset your password",
    html: `
      <p>You requested a password reset. Click the link below to choose a new password:</p>
      <p><a href="${link}">${link}</a></p>
      <p>If you didn’t request this, just ignore this email.</p>
    `,
  });
}
