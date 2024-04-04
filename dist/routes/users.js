var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import UserModel from "../models/userModel.js";
const UsersRoute = express.Router();
const users = [];
// Post Users
UsersRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = new UserModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    });
    try {
        const dataToSave = yield data.save();
        res.status(200).json({ Data: dataToSave });
    }
    catch (error) {
        res.status(400).json({ Error: error });
    }
}));
// Get all Users
UsersRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield UserModel.find();
        res.status(200).json({ Data: data });
    }
    catch (error) {
        res.send(500).json({ Error: error });
    }
}));
// Get single User
UsersRoute.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield UserModel.findById(req.params.id);
        if (data) {
            res.status(200).json({ data });
        }
        else {
            res.status(404).json({ msg: "Not found" });
        }
    }
    catch (error) {
        res.status(500).json({ Error: error });
    }
}));
// Update a user
UsersRoute.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = yield UserModel.findByIdAndUpdate(id, updatedData, options);
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ msg: "User not found." });
        }
    }
    catch (error) {
        res.status(500).json({ Error: error });
    }
}));
// Delete the User
UsersRoute.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield UserModel.findByIdAndDelete(id);
        if (data) {
            res
                .status(200)
                .json({ msg: `User with name: ${data.name} is delted successfully` });
        }
        else {
            res.status(404).json({ msg: "User is not found" });
        }
    }
    catch (error) {
        res.status(500).json({ Error: error });
    }
}));
export default UsersRoute;
