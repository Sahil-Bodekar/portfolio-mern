import dotenv from "dotenv";
dotenv.config();
import express from "express";
import contactRoutes from "./routes/contactRoutes.js";
import mongoose from "mongoose";
import cors from "cors";

import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running on Port 5000");
});
