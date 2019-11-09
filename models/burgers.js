const orm = require("../config/orm");

const burger = {
    selectAll: function (callBack) {
        orm.allBurgers(callBack); 
    },

    devour: function (devoured, id, callBack) {
        orm.devour(devoured, id, callBack);
    },

    create: function (addBurger, callBack) {
        orm.create(addBurger, callBack);
    },

    delete: function (id, callBack) {
        orm.delete(id, callBack);
    }
}

module.exports = burger;