const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// set the app "root" to public - only things in the public folder can be served to the client
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars setup
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT); //server side
});
