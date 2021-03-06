const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./config');

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

let deleteUser = async (user) => {
    try {
        const connection = mysql.createConnection(config.DB_CON);
        await connection.connectAsync();
        let sql = "DELETE FROM users WHERE email = ? ";
        let result = await connection.queryAsync(sql, [

            user
        ]);

        console.log("Affected row(s) : ", result.affectedRows);

        await connection.endAsync();


    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    deleteUser
}