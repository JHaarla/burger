const orm = require("../config/orm");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },

    insertOne: function (insert, cb) {
        orm.insertOne(insert, cb);
    },

    updateOne: function (devoured, id, cb) {
        orm.updateOne(devoured, id, cb);
    }

};

module.exports = burger;