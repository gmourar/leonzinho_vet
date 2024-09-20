require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;


// conf bd (railway)

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

db.connect((err) => {
    if (err) {
        console.error(" bd Connection error");
        return;

    }
    console.log('Railway Connected')

});


// ejs template engine
app.set('View engine' , 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// rotas
const routes = require('./routes/index.js');
app.use('/' , routes);

// inciar o server
app.listen(port, () =>{
    console.log(`Server running at port ${port}`)
});