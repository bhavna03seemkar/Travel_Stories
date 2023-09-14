import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user_routes";
import postRouter from "./routing/post_routes";
import cors from "cors";

const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

//connections
mongoose.set("strictQuery", true);
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.cfokb4n.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log(
        "Connection successful and Listening to localhost on Port 5000"
      )
    )
  )
  .catch((error) => console.log(error));
