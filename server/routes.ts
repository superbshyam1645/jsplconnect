import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
});


export async function registerRoutes(app: Express): Promise<Server> {
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const submission = await storage.createContactSubmission(validatedData);

    // Send email to info@jspl.org
    const mailBody = `
New Inquiry from jspl.org:

Full Name: ${validatedData.fullName}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "-"}
Company Name: ${validatedData.companyName || "-"}
Message:
${validatedData.message}
`;

    await transporter.sendMail({
      from: '"Website Contact" <info@jspl.org>',
      to: "info@jspl.org",
      subject: "New Inquiry from Website Contact Form",
      text: mailBody,
      replyTo: validatedData.email
    });

    res.json({ success: true, data: submission });
  } catch (error) {
    console.error(error); // log for debugging
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
