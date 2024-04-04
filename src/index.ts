import express, { Express } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import routers
import UsersRoute from "./routes/users.js";

dotenv.config();

const app: Express = express();
app.use(express.json());

// MongoDB COnnection
const mongoString:string = process.env.MONGO_CONNECTION_STRING ?? '';
mongoose.connect(mongoString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Connected");
});

// Handle request
app.use("/api/users", UsersRoute);

app.listen(process.env.PORT, () =>
  console.log(`App litening to PORT:: http://localhost:${process.env.PORT}`)
);
