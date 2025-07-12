// app.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import documentRoutes from "./routes/documentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/documents",documentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Odoo Hackathon Backend is running!");
});

export default app;
