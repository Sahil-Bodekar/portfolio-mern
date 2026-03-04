import express from "express";
import axios from "axios";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `🚀 New Portfolio Contact

Name: ${name}
Email: ${email}
Message: ${message}`,
      },
    );

    res.status(200).json({ message: "Message Sent Successfully" });
  } catch (error) {
    console.log("Telegram Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Message Failed" });
  }
});

export default router;
