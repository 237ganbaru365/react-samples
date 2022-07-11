import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import * as db from "../services/db.services";

type User = {
  name: string;
  city: string;
  age: number;
};

const userController = {
  // get all
  getUsers: (req: Request, res: Response) => {
    const users: User[] = [];

    db.getDb().db().collection("users").find();
  },

  // get one
  getUser: (req: Request, res: Response) => {
    const { userId } = req.params;

    db.getDb()
      .db()
      .collection("users")
      .findOne({ name: "Fumina" })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err });
      });
  },

  // create
  createUser: (req: Request, res: Response) => {
    //frontで入力された情報を取得
    const newUser = req.body;

    db.getDb()
      .db()
      .collection("users")
      .insertOne(newUser)
      .then((result) => {
        res.status(201).json({ ...newUser, _id: result.insertedId });
      })
      .catch((err) => {
        res.status(500).json({ message: "error in create user" });
      });
  },

  // update
  updateUser: (req: Request, res: Response) => {},

  // delete
  deleteUser: (req: Request, res: Response) => {},
};

export default userController;
