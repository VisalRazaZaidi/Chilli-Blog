import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import cors from "cors";

const app = express();
dotenv.config();

// Configure Cloudinary right after loading env
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});
// Optional debug (safe): only prints presence/length, not the secret itself
console.log("Cloudinary configured:", process.env.CLOUD_NAME, !!process.env.CLOUD_API_KEY);

const port = process.env.PORT || 4001;
const MONOGO_URL = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use(cookieParser());
// CORS configuration to allow requests from frontend
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:5174",
  process.env.FRONTEND_URL,
].filter(Boolean); // Remove undefined values


app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "application/json"],
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// DB Code
try {
  mongoose.connect(MONOGO_URL);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

// defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

app.listen(port, () => {
  console.log(`⚙️ Server is running on port ${port}`);
});
