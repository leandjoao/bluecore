const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./src/routes');
const path = require('path');
const bodyParser = require('body-parser');
const open = require('open');

const app = express();
dotenv.config();

const dbUser = process.env.DATABASE_USER;
const dbPass = process.env.DATABASE_PASS;
const dbDocs = process.env.DATABASE_DOCS;
const port = process.env.PORT;

const url = `mongodb+srv://${dbUser}:${dbPass}@portfolio.sww52.mongodb.net/${dbDocs}?retryWrites=true&w=majority`;

try {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, });
} catch (error) {
    throw error;
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(__dirname + '/src/public'));

app.listen(port);

open(`http://localhost:${port}`);
