const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./config');

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

let addUser = async (user) => {
    try {
        const connection = mysql.createConnection(config.DB_CON);
        await connection.connectAsync();
        let sql = "INSERT INTO users (email,username,password,first_name,last_name,phone_number) VALUES (?,?,?,?,?,?)";
        let result = await connection.queryAsync(sql, [
            user.email,
            user.username,
            user.password,
            user.first_name,
            user.last_name,
            user.phone_number
        ]);

        console.log("Affected row(s) : ", result.affectedRows);

        await connection.endAsync();


    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    addUser
}