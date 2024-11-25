import express from "express";
import mongoose from "mongoose";
import { PORT, mdb } from "./src/server/config.js";

const app = express();
app.use(express.json());

mongoose
  .connect(mdb)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is listening on Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  
  });

app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.autor || !req.body.pubblishYear) {
      res
        .status(400)
        .send("Bad request, please provide title, author and publish year ");
    }
  } catch (error) {
    console.log("error", error);
  }
});
