const orm = require("../config/orm");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },

    insertOne: function (insert, cb) {
        orm.insertOne("burgers", insert, cb, function(result) {
            cb(result);
        });
    },

    updateOne: function (devoured, id, cb) {
        orm.updateOne("burgers", devoured, id, cb, function(result) {
            cb(result);
        });
    }

};

module.exports = burger;