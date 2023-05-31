import express, { Application } from "express";
import cors from "cors";
// const express = require("express");
const app: Application = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
