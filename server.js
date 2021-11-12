// Server file to run both backend and frontend

var express = require("express")
var cors = require("cors")
var app = require('./router/app');
const logger = require("./model/backendfunctions/middleware/logging")

var port = process.env.PORT || 8001;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.options('*', cors());
app.use(cors());

// Handle 404 - Keep this as a last route
app.use((req, res) => {
    res.status(404);
    res.redirect(`${"http://localhost:" + port}/error.html`)
});

var server = app.listen(port, () => {
    logger.info('Web App Hosted at http://localhost:' + port+"/display_pages/displaypage.html");
});