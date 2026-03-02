import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST - Save contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: "Message Saved Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
