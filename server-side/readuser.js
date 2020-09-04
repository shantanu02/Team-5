const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./config');

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

let readUser = async (email) => {
    try {
        const connection = mysql.createConnection(config.DB_CON);
        await connection.connectAsync();
        let sql = "SELECT * FROM users WHERE email = ?";
        let result = await connection.queryAsync(sql, [
            email
        ]);

        //await connection.endAsync();
        console.log('1');
        console.log(result);
        return result;


    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    readUser
}