const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const main = require("./router/api/main");
const practice = require("./router/api/practice")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello"));

app.use("/api/main", main);
app.use("/api/practice", practice);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
