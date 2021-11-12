var logging = require("../middleware/logging")
const db = require("../config/databse_config2");

const inventory = {
    // FRONT END ===================================================================
    // details.html display individual game rating
    // callback(error?, result?) alwa
    load_all_items: function (callback) {
                const get_inventory = "select Accountholdername from accounts;"
                db.runquery(get_inventory,[],(error, results) => {
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
}

module.exports = inventory;