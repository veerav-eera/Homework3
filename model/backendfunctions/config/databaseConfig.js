//database driver (allows the backend server to connect to the database)
var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",//known ip
            user: "root",
            password: "password",
            database: "OnlineAsset2002103",
            dateStrings: true
        });
        return conn;
    }
};
module.exports = dbconnect