const dbCon = require("../Common/Common");

const Role = function (role) {
  this.id = role.id;
  this.name = role.name;
  this.description = role.description;
};

const find_all_Role = function () {
  dbCon.query("SELECT * FROM Role", function (err, role) {
    if (err) {
      result(null);
      return;
    }
    result(role);
  });
};

const find_by_id_role = function (id) {
  return new Promise(function (resolve, reject) {
    dbCon.query("SELECT * FROM Role where id = ?", id, function (err, role) {
      if (err || role.length === 0) {
        return reject(err);
      }
      return resolve(role[0]);
    });
  });
};

const find_by_name_role = function (nameRole) {
  return new Promise((resolve, reject) => {
    dbCon.query(
      "SELECT * FROM Role where nameRole = ?",
      nameRole,
      function (err, role) {
        if (err || role.length === 0) {
          return reject(err);
        }
        return resolve(role[0]);
      }
    );
  });
};

module.exports = { find_all_Role, find_by_id_role, find_by_name_role };
