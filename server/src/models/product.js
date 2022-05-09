const dbConn = require("../Common/Common");
const Product = function (product) {
    this.nameProduct = product.nameProduct;
    this.description = product.description;
    this.warranty = product.warranty;
    this.quantity = product.quantity;
    this.promotional = product.promotional;
    this.status = product.status;
    this.image = product.image;
    this.idCategory = product.idCategory;
    this.idUnit = product.idUnit;
    this.idManufacturer = product.idManufacturer;
    this.idOrigin = product.idOrigin;
};

const find_by_name_row_product = function (nameRow, value) {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `SELECT * FROM product WHERE ${nameRow} = '${value}'`,
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

const find_all_Product = () => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `SELECT * FROM product `,
            (error, elements) => {
                if (error) {
                    return reject(error);
                }
                return resolve(elements);
            }
        );
    });
};

const find_by_Id = (id) => {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `SELECT * FROM product where id = '${id}'`,
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
            `DELETE FROM product WHERE (id = '${id}');`,
            (error, elements) => {
                if (error) {
                    return reject(error);
                } else {
                    console.log(elements);
                    return resolve(elements.affectedRows);
                }
            }
        );
    });
};

const InsertProduct = function (productNew) {
    return new Promise((resolve, reject) => {
        dbConn.query("Insert Into product SET ?", productNew, (err, elements) => {
            if (err) {
                return reject(err);
            } else {
                return resolve({ id: elements.insertId, ...elements });
            }
        });
    });
};

const UpdateProduct = function (productUpdate, id) {
    return new Promise((resolve, reject) => {
        dbConn.query(
            `Update product SET nameProduct = '${productUpdate.nameProduct}', description = '${productUpdate.description}', warranty = '${productUpdate.warranty}' , quantity = '${productUpdate.quantity}', promotional = '${productUpdate.promotional}', status = '${productUpdate.status}' , image = '${productUpdate.image}'  , idCategory = '${productUpdate.idCategory}', idUnit = '${productUpdate.idUnit}', idManufacturer = '${productUpdate.idManufacturer}' , idOrigin = '${productUpdate.idOrigin}' WHERE (id = '${id}')`,
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
    find_by_name_row_product,
    find_all_Product,
    find_by_Id,
    delete_By_Id,
    InsertProduct,
    UpdateProduct,
    Product,
};
