const db = require("../config/databaseConfig");
var logging = require("../middleware/logging")
const inventory = {
    // FRONT END ===================================================================
    // details.html display individual game rating
    // callback(error?, result?) alwa
    load_all_items: function (callback) {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {//database connection gt issue!
                console.log(err);
                callback(err, null);
            } else {
                const get_inventory = "select Accountholdername from accounts;"
                dbConn.query(get_inventory,(error, results) => {
                    dbConn.end();
                    if (error) {
                        callback(error, /*no result*/null);
                    }
                    else if (results.length === 0) {
                        callback("Cannot find records","Cannot find records");
                    }
                    else {
                        callback(null, results);
                    }
                });
            }
        });
    },
}

module.exports = inventory;