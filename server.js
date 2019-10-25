const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// ser
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
