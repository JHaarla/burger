const connection = require("./connections");

const orm = {

    //list all burgers
    selectAll: function (cb) {
        const dbQuery = "SELECT * FROM burgers;";

        connection.query(dbQuery, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
},

//add burger
insertOne: function(insert, )