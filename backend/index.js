import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { ensureDefaultAdmin } from "./controllers/authController.js";
import authRouter from "./routes/auth.js";
import eventRouter from "./routes/event.js";

dotenv.config();
connectDB();

const app = express();
// app.use(cors());

 app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
}));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);

// ✅ Create default admin automatically
ensureDefaultAdmin();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
