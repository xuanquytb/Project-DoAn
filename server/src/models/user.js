const dbConn = require("../Common/Common");
const Users = function (user) {
  this.username = user.username;
  this.passwordEn = user.password;
  this.fullname = user.fullname;
  this.email = user.email;
  this.phone = user.phone;
  this.address = user.address;
  this.idRole = user.idRole;
};

const find_by_name_row = function (nameRow, value) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM user WHERE ${nameRow} = '${value}'`,
      (err, elements) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(elements);
        }
      }
    );
  });
};

const find_all = () => {
  return new Promise((resolve, reject) => {
    dbConn.query("SELECT * FROM user", (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const find_by_Id = (id) => {
  return new Promise((resolve, reject) => {
    dbConn.query(`SELECT * FROM user where id = '${id}'`, (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements[0]);
    });
  });
};

const find_by_username = function (username) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM user where username = '${username}'`,
      (err, elements) => {
        if (err) {
          return reject(err);
        } else {
          resolve(elements[0]);
        }
      }
    );
  });
};

const InsertUser = function (userNew) {
  return new Promise((resolve, reject) => {
    dbConn.query("Insert Into user SET ?", userNew, (err, element) => {
      if (err) {
        return reject(err);
      } else {
        return resolve({ id: element.insertId, ...element });
      }
    });
  });
};

module.exports = {
  find_all,
  find_by_Id,
  find_by_username,
  InsertUser,
  find_by_name_row,
  Users,
};
