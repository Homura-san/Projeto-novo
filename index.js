const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const connection = require('./database/database');

// view engine
app.set('view engine', 'ejs');

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(8080, () => {
    console.log('Servidor rodando...')
})
