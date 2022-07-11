import express from "express";
import userController from "../controllers/userController";

//特定URIにアクセスした際に、どのファイルを実行するかを指定する
//server.tsが肥大化するのを防ぐため
const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:userId", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.patch("/:userId", userController.updateUser);
userRouter.delete("/:userId", userController.deleteUser);

export default userRouter;
