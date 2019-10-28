const connection = require("./connections");

const orm = {

    //list all burgers
    selectAll: function (cb) {
        const dbQuery = "SELECT * FROM burgers;";

        connection.query(dbQuery, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },


    //add burger
    insertOne: function (insert, cb) {
        const dbQuery = "INSERT INTO burgers SET ?";
        connection.query(dbQuery, [insert], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },

    //change devoured status
    updateOne: function (devoured, id, cb) {
        const dbQuery = "UPDATE burgers SET ? WHERE id = ?";
        connection.query(dbQuery, [devoured, id], function(err, result){
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    }

};

module.exports = orm;