const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./config');

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

let readdbt = async () => {
    try {
        const connection = mysql.createConnection(config.DB_CON);
        await connection.connectAsync();
        let sql = "SELECT * FROM courses WHERE course_name = 'Database Technologies' ";
        let result = await connection.queryAsync(sql);

        await connection.endAsync();

        return result;


    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    readdbt
}