// pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    const msg = {
      to: email,
      from: "your-email@example.com", // Use the email address or domain you verified with SendGrid
      subject: "Thank you for subscribing!",
      text: "Thank you for subscribing to our platform, we will contact you soon as we start to roll out the dashboard.",
      html: "<strong>Thank you for subscribing to our platform, we will contact you soon as we start to roll out the dashboard.</strong>",
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
