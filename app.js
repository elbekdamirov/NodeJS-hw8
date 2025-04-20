const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const { title } = require("node:process");
const methodOverride = require("method-override");
const { createViewPage } = require("./helpers/create.view.page");
const PORT = process.env.PORT || 3333;
const indexRoute = require("./routes/index.routes");

const app = express(); //server yaratish
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use(express.static("styles"));
app.use(express.static("images"));

app.use(morgan("short"));

app.use(indexRoute);

app.get("/", (req, res) => {
  res.render(createViewPage("index"), { title: "Main" });
});

app.use((req, res) => {
  res.render(createViewPage("404"), { title: "404" });
});

console.log("hello");

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
