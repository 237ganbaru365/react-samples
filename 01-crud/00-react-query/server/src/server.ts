import express from "express";
import cors from "cors";

import * as db from "./services/db.services";
import userRouter from "./routes/userRouter";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// like as body-parser
app.use(express.urlencoded());

// test if could connect with express
app.get("/", (req, res) => {
  res.json({ message: "Hello, from express!" });
});

// main logic here
app.use("/users", userRouter);

// listen after checking if connect to db
db.initDb((err, db) => {
  if (err) {
    console.error("error", err);
  } else {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  }
});
