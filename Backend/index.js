import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./route.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);

const connectDb = async () => {
  try {
    await mongoose.connect(
     "mongodb+srv://esta:VGSniYTU8EXq7HZi@emitram.jchuaei.mongodb.net/emitram?retryWrites=true&w=majority&appName=emitram"
    );
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
};

app.listen(PORT, async () => {
  await connectDb();
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
