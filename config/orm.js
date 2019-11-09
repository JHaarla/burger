var connection = require("../config/connection.js");

const orm = {
    allBurgers: function (callBack) {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            callBack(result);
        });
    },


    devour: function (devoured, id, callBack) {
        const queryString = "UPDATE burgers SET ? WHERE id = ?";
        connection.query(queryString, [devoured, id], function(err, result) {
            if(err) throw err;
            console.log(result);
            callBack(result);
        });
    },


    create: function (addBurger, callBack) {
        const queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, [addBurger], function(err, result) {
            if (err) throw err;
            console.log(result);
            callBack(result);
        });
    },


    delete: function (id, callBack) {
        const queryString = "DELETE FROM burgers WHERE id = ?";
        connection.query(queryString, [id], function (err, result) {
            if(err) throw err;
            console.log(result);
            callBack(result);
        });
    }

}

module.exports = orm;