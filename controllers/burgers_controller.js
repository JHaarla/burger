const express = require("express");
const router = express.Router();
const burger = require("../models/burgers")

// home
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

// post new burger 
router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    });
});

//grab id of burger to be devoured from params
router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne({ devoured: 1 }, req.params.id, function(result) {
        if (parseInt(result.changedRows) === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end;
        }
    });
});

module.exports = router;