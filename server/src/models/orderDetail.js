const dbConn = require("../Common/Common");

const orderDetail = function (order) {
  this.idCustomer = order.idCustomer;
  this.idEmployee = order.idEmployee;
  this.sumPayment = order.sumPayment;
  this.discount = order.discount;
  this.state = order.state;
  this.idPayment = order.idPayment;
};

// const find_by_name_row_OrderDetail = function (nameRow, value) {
//   return new Promise((resolve, reject) => {
//     dbConn.query(
//       `SELECT * FROM category WHERE ${nameRow} = '${value}'`,
//       (err, elements) => {
//         if (err) {
//           return reject(err);
//         } else {
//           return resolve(elements);
//         }
//       }
//     );
//   });
// };

const find_all_OrderDetail = () => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * from view_orderdetailjoinuser`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};
const find_max_id = () => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT max(id) as max FROM orderdetail;`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements[0]);
      }
    );
  });
};
const find_all_OrderDetail_by_idCustomer = (id) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * from view_orderdetailjoinuser where idCustomer = ${id}`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};

// const find_by_Id = (id) => {
//   return new Promise((resolve, reject) => {
//     dbConn.query(
//       `SELECT * FROM category where id = '${id}'`,
//       (error, elements) => {
//         if (error) {
//           return reject(error);
//         }
//         return resolve(elements[0]);
//       }
//     );
//   });
// };

// const delete_By_Id = (id) => {
//   return new Promise((resolve, reject) => {
//     dbConn.query(
//       `DELETE FROM category WHERE (id = '${id}');`,
//       (error, elements) => {
//         if (error) {
//           return reject(error);
//         } else {
//           return resolve(elements.affectedRows);
//         }
//       }
//     );
//   });
// };

// const find_by_nameCategory = function (nameCategory) {
//     return new Promise((resolve, reject) => {
//         dbConn.query(
//             `SELECT * FROM category where nameCategory = '${nameCategory}'`,
//             (err, elements) => {
//                 if (err) {
//                     return reject(err);
//                 } else {
//                     resolve(elements[0]);
//                 }
//             }
//         );
//     });
// };

const InsertOrderDetail = function (orderDetailNew) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "Insert Into orderDetail SET ?",
      orderDetailNew,
      (err, elements) => {
        if (err) {
          return reject(err);
        } else {
          return resolve({ id: elements.insertId, ...elements });
        }
      }
    );
  });
};

const UpdateOrderDetail_State = function (state, id) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `Update orderDetail SET state = '${state}' WHERE (id = '${id}')`,
      (err, element) => {
        if (err) {
          return reject(err);
        } else {
          return resolve({ id: element.affectedRows, ...element });
        }
      }
    );
  });
};

module.exports = {
  find_all_OrderDetail,
  // find_by_Id,
  // find_by_name_row_OrderDetail,
  // delete_By_Id,
  find_all_OrderDetail_by_idCustomer,
  InsertOrderDetail,
  UpdateOrderDetail_State,
  find_max_id,
  orderDetail,
};
