const db = require("../config/databaseConfig");

const user = {
    //add new users
    add_user : function(Accountholdername, email, password,callback){
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {//database connection gt issue!
                console.log(err);
                callback(err, null);
            } else {
                const updateusers = "insert into accounts(Accountholdername, email, Approvability, password) values(?,?,?,?);"
                dbConn.query(updateusers,[Accountholdername, email, "user", password],(error, results) => {
                    dbConn.end();
                    if (error) {
                        callback(error, null);
                    }
                    else if (results.length === 0) {
                        callback("Cannot find records", "Cannot find records");
                    }
                    else {
                        callback(null, results);
                    }
                });
            }
        });
    }

};

module.exports = user;