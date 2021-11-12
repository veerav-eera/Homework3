//Router funcion
//get controller file
var express = require("express")
var app = express()
app.use(express.json());
var cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.options('*', cors());
app.use(cors());

var time = 0;
// specific javascript code needed to run the various different functions
var inventory = require('../model/backendfunctions/Services/inventory');
var user = require('../model/backendfunctions/Services/users');
var user2 = require('../model/backendfunctions/Services/user2');
var logging = require("../model/backendfunctions/middleware/logging");
//
app.get("/api/allitems/", (req, res) => {
    //edit What you need here
    logging.info("api: get all users \n");
    inventory.load_all_items((error, results) => {
        if (error) {
            logging.info("error found")
            logging.info(error)
            res.status(500).send(error);
        } else {
            logging.info("no error found")
            res.status(200).send(results);
        }
    });
    logging.info("Api ended \n\n\n");
});

//create new users
app.post("/api/user", (req, res) => {
    //edit What you need here
    logging.info("running fine")
    logging.info("api: Add new user \n");
    logging.info(req.body.username)
    logging.info(req.body.email)
    logging.info(req.body.password)
    if (req.body.username && req.body.email && req.body.password ) {
              
    user.add_user(req.body.username, req.body.email, req.body.password,(error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(results);
        }
    });
   logging.info("end of add user api")
}else{
    res.status(404).send();
}
});

//create new users
app.post("/user2", (req, res) => {
    //edit What you need here
    logging.info("running fine")
    logging.info("api: Add new user \n");
    logging.info(req.body.username)
    logging.info(req.body.email)
    logging.info(req.body.password)
    if (req.body.username && req.body.email && req.body.password ) {
              
    user2.add_user(req.body.username, req.body.email, req.body.password,(error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(results);
        }
    });
   logging.info("end of add user api")
}else{
    res.status(404).send();
}
});

module.exports = app;