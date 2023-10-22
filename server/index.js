import dotenv from "dotenv";
import express from "express";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 7171;

connectDB();

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Serving on http://localhost:${PORT}`);
});
