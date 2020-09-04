const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const adduser = require('./adduser');
const readuser = require('./readuser');
const updateuserpassword = require('./updateuserpassword');
const deleteuser = require('./deleteuser');
const readCourse = require('./readCourse');
const cpp = require("./cpp");
const c = require("./c");
const ds = require("./ds");
const mean = require("./mean");
const awp = require("./awp");
const python = require("./python");
const dbt = require("./dbt");
const csharp = require("./csharp");


/**--------------------------------------Add User--------------------------------------------------- */
app.post('/readuser1', async (req, res) => {
    try {
        const input = req.body;
        console.log(input);
        let output = await readuser.readUser(input.email);
        //console.log(output);
        if (output == "") {
            console.log("sucess");
            res.send('1');
        } else {
            res.send('0');
        }


    } catch (err) {
        console.log(err.name);
    }
});



app.post('/adduser', async (req, res) => {
    try {
        const input = req.body;
        await adduser.addUser(input);
        res.json({
            status: "added"
        });

        res.end();

    } catch (err) {
        console.log(err.name);
    }
});


/*-----------------------------------------Update Password----------------------------------------------------*/

app.post('/updateUserPassword', async (req, res) => {
    try {

        const input = req.body;
        console.log(input.password);
        let output = await readuser.readUser(input.email);
        if (input.email === output[0].email && input.phone_number === output[0].phone_number) {
            let result = await updateuserpassword.updateUserPassword(input);
            res.setHeader('Content-Type', 'application/json');
            res.send('1')

        } else {
            res.setHeader('Content-Type', 'application/json');
            res.send('0')
        }


        res.end();

    } catch (err) {
        console.log(err.name);
    }
});

/*--------------------------------------------Read User-------------------------------------------------*/

app.post('/readuser', async (req, res) => {
    try {
        const input = req.body;
        console.log(input);
        let output = await readuser.readUser(input.email);
        if (output[0].password === input.password) {
            console.log("sucess");
            res.send('1');
        } else {
            res.send('0');
        }


    } catch (err) {
        console.log(err.name);
    }
});

/*-----------------------------------------Read Course----------------------------------------------------*/

app.get('/readCourse', async (req, res) => {
    try {

        let output = await readCourse.readCourses();
        //    res.setHeader('Content-Type','application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/*-----------------------------------------Read Course----------------------------------------------------*/



app.get('/cpp', async (req, res) => {
    try {

        let output = await cpp.readCpp();
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/**------------------------------------------------------------------------------------------------- */
app.get('/c', async (req, res) => {
    try {

        let output = await c.readC();
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/**------------------------------------------------------------------------------------------------- */

app.get('/ds', async (req, res) => {
    try {

        let output = await ds.readds();
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/**------------------------------------------------------------------------------------------------- */
app.get('/mean', async (req, res) => {
    try {

        let output = await mean.readMean();
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/**------------------------------------------------------------------------------------------------- */
app.get('/awp', async (req, res) => {
    try {

        let output = await awp.readawp();
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/**------------------------------------------------------------------------------------------------- */
app.get('/python', async (req, res) => {
    try {

        let output = await python.readpython();
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/**------------------------------------------------------------------------------------------------- */
app.get('/dbt', async (req, res) => {
    try {

        let output = await dbt.readdbt();
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/**------------------------------------------------------------------------------------------------- */
app.get('/csharp', async (req, res) => {
    try {

        let output = await csharp.readCsharp();
        res.setHeader('Content-Type', 'application/json');
        res.send(output);
        res.end();


    } catch (err) {
        console.log(err);
    }
});

/**------------------------------------------------------------------------------------------------- */
app.post('/readuser2', async (req, res) => {
    try {
        const input = req.body;
        console.log(input);
        let output = await readuser.readUser(input.e);
        console.log(output);
        if (output == "") {
            console.log("sucess");
            res.send('0');
        } else {
            res.send(output);
        }


    } catch (err) {
        console.log(err);
    }
});








app.post('/deleteUser', async (req, res) => {
    try {

        const input = req.body.email;
        console.log(input);

        let result = await deleteuser.deleteUser(input);
        res.setHeader('Content-Type', 'application/json');
        res.send('1')

        res.end();

    } catch (err) {
        console.log(err.name);
    }
});



app.listen(3000);