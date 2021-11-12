// Server file to run both backend and frontend

var express = require("express")
var cors = require("cors")
var app = require('./router/app');
const logger = require("./model/backendfunctions/middleware/logging")
var database = require('./model/backendfunctions/config/databse_config2')

database.connect('postgres://fjhfhvhk:7wUJ0CQMOFFhvUJWKyo5cj1AYAeQvP3U@fanny.db.elephantsql.com/fjhfhvhk')
//var port = process.env.PORT || 8001;
var port = 8001

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//searches for the folder then the specific file name
//parent folder
app.use(express.static("public/display_pages"));
app.options('*', cors());
app.use(cors());

// Handle 404 - Keep this as a last route
app.use((req, res) => {
    res.status(404);
    res.redirect(`${"http://localhost:" + port}/error.html`)
});

var server = app.listen(port, () => {
    logger.info('Web App Hosted at http://localhost:'+port);
});