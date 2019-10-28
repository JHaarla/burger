const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();

// set the app "root" to public - only things in the public folder can be served to the client
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT); //server side
}); 
