const db = require("../config/databse_config2");

const user = {
    //add new users
    add_user : function(Accountholdername, email, password,callback){
                db.runquery("insert into accounts(Accountholdername, email, Approvability, password) values(?,?,?,?);",[Accountholdername, email, "user", password],(error, results) => {
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
};

module.exports = user;