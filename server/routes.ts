import dotenv from 'dotenv';
dotenv.config();
// Now use process.env.SENDGRID_API_KEY

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "SendGrid",
//   auth: {
//     user: "apikey",
//     pass: process.env.SENDGRID_API_KEY,
//   },
// });
import sgMail from '@sendgrid/mail';
console.log('SENDGRID', process.env.SENDGRID_API_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export async function registerRoutes(app: Express): Promise<Server> {
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const submission = await storage.createContactSubmission(validatedData);

    const msg = {
      to: 'info@jspl.org', // destination
      from: 'info@jspl.org', // your verified sender (must match SendGrid verified sender/domain)
      subject: 'New Inquiry from Website Contact Form',
      text: `
Full Name: ${validatedData.fullName}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "-"}
Company Name: ${validatedData.companyName || "-"}
Message:
${validatedData.message}
`,
      replyTo: validatedData.email,
    };

    await sgMail.send(msg);

    res.json({ success: true, data: submission });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: "Invalid submission data or failed to send email" });
  }
});


  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
