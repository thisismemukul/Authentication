const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user");
const app = express();

mongoose.connect("mongodb://localhost/auth");

app.set("view engine", "ejs");

app.use(require("express-session")({
    secret: "You know thisisme Mukul",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

app.get("*", function(req, res) {
    res.send("404 Page not found");
});

const port = process.env.PORT = '5500';
app.listen(port, () => console.log(`server started at :${port}`));