const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

// connection to mongodb
mongoose.connect("mongodb://localhost:27017/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require('./routes/todo'));

// server configurations
app.listen(PORT, () => {
    console.log(`Server is running at port no: ${PORT}`);
});