var mysql = require('mysql');


var con = mysql.createConnection({
	host: "localhost",
	user: "xclubxyz_dvhoa",
	password: "xclubxyz_dvhoa",
	database: "xclubxyz_dvhoa"
});

con.connect(function(err) {
  if (err) throw err;
});

module.exports = con;