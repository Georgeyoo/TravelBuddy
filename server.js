const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
// let morgan = require("morgan");


// require("./client/public/index");
const port = process.env.PORT || 3000;


// Connect to Postgres db
const pool = new pg.Pool({
	port: 5432,
	password: "e7bd3d778ea19376b6c2c9a0d235bd40cc78422de00598bb1002c872cdc5d8e7",
	database: "daspvvn2jseqvr",
	host: "ec2-54-235-88-58.compute-1.amazonaws.com",
	user: "avtoenaofehwbm"
});

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

app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
  		res.redirect('http://' + req.hostname + req.url);
	} else {
  		next();
	}
});

app.post("/api/new-location", function(request, response) {
	console.log(request.body);
});

// app.use('/', index);

app.listen(port, () => console.log("Listening on port " + port));