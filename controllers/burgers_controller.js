const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

//home route
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        res.render("index", {burgers: data});
    });
});

//POST route to insert new burger into db
router.post("/api/burger", function (req, res) {
    burger.create(req.body, function(data) {
        res.redirect("/");
    });
});

//grab id from params of burger to be changed to devoured
router.put("/api/burger/:id", function(req, res) {
    burger.devour({devoured: 1}, req.params.id, function (data) {
        res.sendStatus(200);
    });
});

//grab id from params of burger to be deleted
router.delete("/api/burger/:id", function(req, res){
    burger.delete(req.params.id, function(data) {
        res.sendStatus(200);
    });
});

module.exports = router;