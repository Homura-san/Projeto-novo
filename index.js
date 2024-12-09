require('dotenv').config()
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

// Rotas do model
const senderRoutes = require('./routes/senderRoutes');

app.use('/sender', senderRoutes)

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/edit', (req, res)=> {
    res.render("edit");
})

// entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.8a8ty.mongodb.net/`
)
    .then(() => {
        console.log("MongoDB Conectado");
        app.listen(3000);
    })
    .catch(err => console.log(err));

app.listen(8080, () => {
    console.log('Servidor rodando...')
})
