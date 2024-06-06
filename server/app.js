import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js"

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mongoo db is connected"))
  .catch((err) => console.log("error ", err));

const port = 3000;

app.use(json());

app.listen(port, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running and App is listening on port " + port
    );
  } else {
    console.log("Error occured, server can't start", error);
  }
});


app.use("/api/user", userRoute);

