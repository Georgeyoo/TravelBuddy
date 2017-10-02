const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
// let morgan = require("morgan");


// require("./client/public/index");
const port = process.env.PORT || 3000;


// Connect to Postgres db
let pool = new pg.Pool({
	port: 5432,
	password: "",
	database: "gusto",
	// setting max connections
	max: 10,
	host: "localhost",
	user: "george"
});


// Testing connection to postgreSQL 
// pool.connect((err, db, done) => {
// 	if(err) {
// 		return console.log(err);
// 	} else {

// 		var name = "Home";
// 		var city = "San Francisco";
// 		var state = "California";
// 		var zip = 94121;
// 		var address = "133 Point Lobos Ave.";
// 		var lat = 37.779523;
// 		var long = -122.504689;

// 		db.query("INSERT INTO locations (name, city, state, zip, lat, long, address) VALUES($1, $2, $3, $4, $5, $6, $7)", [name, city, state, zip, lat, long, address], (err, table) => {
// 			if(err) {
// 				return console.log(err);
// 			} else {
// 				console.log('INSERTED DATA SUCCESS');
// 				db.end();
// 			}
// 		})
// 	}
// })

pool.connect((err, db, done) => {
	if(err) {
		return console.log(err);
	} else {

		db.query("SELECT * FROM locations;", (err, table) => {
			if(err) {
				return console.log(err);
			} else {
				console.log(table.rows[0]);
				db.end();
			}
		})
	}
})


let app = express();

// app.set('views', path.join(__dirname, './client/public/index'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// What is Cors?
// Allows the React component to send API requests to the PostgreSQL server]]
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
	next();
});

app.post("/api/new-location", function(request, response) {
	console.log(request.body);
});

// app.use('/', index);

app.listen(port, () => console.log("Listening on port " + port));