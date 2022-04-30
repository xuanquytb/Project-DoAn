//kết nối csdl và ghép nối dữ liệu
const dbConn = require("../Common/Common");
const Card = function (card) {
    this.idCustomer = card.idCustomer;
    this.idMGG = card.idMGG;
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

const find_by_idCard_and_IdCus = function (id, idCard) {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `SELECT * FROM card where idCustomer = '${id}' and id = ${idCard}`,
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

const find_all_Card = (idCustomer) => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `SELECT * FROM card where idCustomer =  '${idCustomer}'`,
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

const find_by_Id = (id) => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `SELECT * FROM user where id = '${id}'`,
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

const UpdateCard = function (cardUpdate, idCustomer) {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `Update card SET idMGG = '${cardUpdate.idMGG}' WHERE (idCustomer = '${idCustomer}')`,
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
    find_all_Card,
    find_by_Id,
    InsertCard,
    UpdateCard,
    find_by_name_row_card,
    delete_By_Id,
    find_by_idCard_and_IdCus,
    Card,
};
