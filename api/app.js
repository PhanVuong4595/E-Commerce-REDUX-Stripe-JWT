import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";

import userRoute from "./routes/userRoutes";
import authRoute from "./routes/authRoutes";
import productRoute from "./routes/productRoutes";
import cartRoute from "./routes/cartRoutes";
import orderRoute from "./routes/orderRoutes";

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

//Route
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", productRoute);
app.use("/api", cartRoute);
app.use("/api", orderRoute);

// connection
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running port: http://localhost:${process.env.PORT}`);
});
