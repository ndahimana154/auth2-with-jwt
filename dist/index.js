var _a;
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// Import routers
import UsersRoute from "./routes/users.js";
dotenv.config();
const app = express();
app.use(express.json());
// MongoDB COnnection
const mongoString = (_a = process.env.MONGO_CONNECTION_STRING) !== null && _a !== void 0 ? _a : '';
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
app.listen(process.env.PORT, () => console.log(`App litening to PORT:: http://localhost:${process.env.PORT}`));
