const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./config');

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

let readCourses = async () => {
    try {
        const connection = mysql.createConnection(config.DB_CON);
        await connection.connectAsync();
        let sql = "SELECT * FROM java ORDER BY c_rating DESC";
        let result = await connection.queryAsync(sql);

        await connection.endAsync();

        return result;


    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    readCourses
}