import UserController from "./user.controller.js";
import express from "express";

const UserRouter = express.Router();

const userController = new UserController();
UserRouter.get("/", userController.getAllUser);
UserRouter.post("/register", userController.register);
UserRouter.post("/login", userController.logIn);

export default UserRouter;
