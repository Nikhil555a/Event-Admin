import asyncHandler from "express-async-handler";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

const genToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// ✅ Automatically create default admin if not exist
export const ensureDefaultAdmin = async () => {
  const existingAdmin = await Admin.findOne({ email: "admin@gmail.com" });
  if (!existingAdmin) {
    await Admin.create({
      email: "admin@gmail.com",
      password: "12345", // plain password (will be hashed by pre-save hook)
    });
    console.log("✅ Default Admin Created: admin@gmail.com / 12345");
  } else {
    console.log("ℹ️ Default Admin already exists");
  }
};

// ✅ Login Controller
export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      email: admin.email,
      token: genToken(admin._id),
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
