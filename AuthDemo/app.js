var express = require("express");
app = express();

app.set("view-engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app("*", function(req, res) {
    res.send("404 Page not found");
});

const port = process.env.PORT = '5500';
app.listen(port, () => console.log(`server started at :${port}`));