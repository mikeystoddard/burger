var orm = require("../config/orm.js");


var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  createAll: function (cols, vals, cb) {
    orm.createAll("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateAll: function (objColsVals, condition, cb) {
    orm.updateOne("burgers", objColsVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;