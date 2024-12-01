const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./src/configs/database.config");
const TodoRoute = require("./src/routes/todo.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});

app.use("/todos", TodoRoute);

app.get("/info", (req, res) => {
  const myProfile = {
    name: "Huynh Thi Thanh Tuyen",
    code: "QE170226",
  };
  res.json({ data: myProfile });
});

app.post("/age", (req, res) => {
  const { birthYear } = req.body;

  if (!birthYear || isNaN(birthYear)) {
    return res.status(400).json({ error: "Please provide a valid birth year" });
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  res.json({ age });
});
