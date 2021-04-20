//import Dependencies
const express = require("express");
const cors = require("cors");
const user = require("./controllers/userControllers");
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup controller
app.use("/api/user", user);

app.listen(8000, () => console.log("server berjalan di port 80000"));
