//kết nối csdl và ghép nối dữ liệu
const dbConn = require("../Common/Common");
const Card = function (card) {
  this.idUser = card.idUser;
  this.stateCard = card.stateCard;
};

const find_by_name_row_card = function (nameRow, value) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM card WHERE ${nameRow} = '${value}'`,
      (err, element) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(element);
        }
      }
    );
  });
};

const find_card_by_userid = function (id) {
  return new Promise((resolve, reject) => {
    dbConn.query(`call procedureViewCard(${id})`, (err, element) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(element[0]);
      }
    });
  });
};

const find_by_idCard_and_IdCus = function (id, idCard) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM card where idUser = '${id}' and id = ${idCard}`,
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

const find_card_Detail_by_Id = (id) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM carddetail join card on carddetail.idCard = card.id  where carddetail.id = '${id}'`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements[0]);
      }
    );
  });
};

const check_card_Detail_by_Id = (idCard, idProduct) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `select * from carddetail where idCard = ${idCard} and idProduct = ${idProduct}`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements[0]);
      }
    );
  });
};

const delete_By_Id = (id) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `DELETE FROM card WHERE (id = '${id}');`,
      (error, elements) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(elements.affectedRows);
        }
      }
    );
  });
};

const delete_Card_Detail_By_Id = (id) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `DELETE FROM carddetail WHERE (id = '${id}')`,
      (error, elements) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(elements.affectedRows);
        }
      }
    );
  });
};

const InsertCard = function (cardNew) {
  return new Promise((resolve, reject) => {
    dbConn.query("Insert Into Card SET ?", cardNew, (err, elements) => {
      if (err) {
        return reject(err);
      } else {
        return resolve({ id: elements.insertId, ...elements });
      }
    });
  });
};
const find_all_Card = function (idUser) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM card where userid =  '${idUser}'`,
      (error, elements) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(elements);
        }
      }
    );
  });
};

const InsertCardDetail = function (carditem) {
  return new Promise((resolve, reject) => {
    // INSERT INTO `carddetail` (`idCard`, `idProduct`, `idCoupon`, `dongia`, `quantity`, `sumMoney`)
    dbConn.query("Insert Into carddetail SET ?", carditem, (err, elements) => {
      if (err) {
        return reject(err);
      } else {
        return resolve({ id: elements.insertId, ...elements });
      }
    });
  });
};

const UpdateCard = function (cardUpdate, idUser) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `Update card SET idMGG = '${cardUpdate.idMGG}' WHERE (idUser = '${idUser}')`,
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

const GetCard_byUserId = function (idUser) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT * FROM webthaotran.card where userid = ${idUser}`,
      (err, element) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(element[0]);
        }
      }
    );
  });
};

const UpdateCardDetail = function (quantity, dongia, id) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `Update carddetail SET quantity = '${quantity}',sumMoney = '${dongia}' WHERE (id = '${id}');`,
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

const cal_sum_order_by_id_card = function (idCard) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT sum(carddetail.sumMoney) as 'tongthanhtoan' FROM webthaotran.carddetail where idCard = ${idCard};`,
      (error, elements) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(elements[0]);
        }
      }
    );
  });
};

module.exports = {
  find_all_Card,
  find_by_Id,
  InsertCard,
  UpdateCard,
  find_by_name_row_card,
  delete_By_Id,
  find_by_idCard_and_IdCus,
  find_card_by_userid,
  //////////////////////////////
  InsertCardDetail,
  UpdateCardDetail,
  delete_Card_Detail_By_Id,
  find_card_Detail_by_Id,
  check_card_Detail_by_Id,
  cal_sum_order_by_id_card,
  GetCard_byUserId,
  Card,
};
