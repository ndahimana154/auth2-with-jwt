import express, { Express, IRouter, Request, Response } from "express";
import UserModel from "../models/userModel.js";

const UsersRoute: IRouter = express.Router();

const users: string[] = [];

// Post Users
UsersRoute.post("/", async (req: Request, res: Response) => {
  const data = new UserModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json({ Data: dataToSave });
  } catch (error) {
    res.status(400).json({ Error: error });
  }
});

// Get all Users
UsersRoute.get("/", async (req: Request, res: Response) => {
  try {
    const data = await UserModel.find();
    res.status(200).json({ Data: data });
  } catch (error) {
    res.send(500).json({ Error: error });
  }
});

// Get single User
UsersRoute.get("/:id", async (req: Request, res: Response) => {
  try {
    const data = await UserModel.findById(req.params.id);
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ msg: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ Error: error });
  }
});

// Update a user
UsersRoute.patch("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await UserModel.findByIdAndUpdate(id, updatedData, options);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ msg: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ Error: error });
  }
});

// Delete the User
UsersRoute.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await UserModel.findByIdAndDelete(id);
    if (data) {
      res
        .status(200)
        .json({ msg: `User with name: ${data.name} is delted successfully` });
    } else {
      res.status(404).json({ msg: "User is not found" });
    }
  } catch (error) {
    res.status(500).json({ Error: error });
  }
});

export default UsersRoute;
