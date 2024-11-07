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

app.get("/age", (req, res) => {
  const myAge = {
    age: 21,
  };
  res.json({ data: myAge });
});
