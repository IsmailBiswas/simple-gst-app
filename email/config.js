import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, 
  port: process.env.EMAIL_PORT, 
  secure: process.env.EMAIL_SECURE,
  auth: {
    user: process.env.EMAIL_ADDR,
    pass: process.env.EMAIL_PASS,
  }
});
