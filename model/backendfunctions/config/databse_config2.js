//database driver (allows the backend server to connect to the database)
var mysql = require('mysql');

let connection= mysql.createPool({
    host: "localhost",//known ip
    user: "root",
    password: "password",
    database: "OnlineAsset2002103",
    dateStrings: true
});

var dbconnect = {
    runquery :function(Query,parms,callback){
            connection.query(Query,parms,function(err, rows) {
                 callback(err, rows)
            })
    }
};


module.exports = dbconnect;