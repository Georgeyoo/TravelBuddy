const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');


let app = express();
const connectionString = 'postgres://avtoenaofehwbm:e7bd3d778ea19376b6c2c9a0d235bd40cc78422de00598bb1002c872cdc5d8e7@ec2-54-235-88-58.compute-1.amazonaws.com:5432/daspvvn2jseqvr'
let port = process.env.DATABASE_URL || 3000;


// Connect to Heroku Postgres DB
let pool = new pg.Pool({connectionString});

// Test Insert
// pool.connect((err, db, done) => {
// 	if(err) {
// 		return console.log(err);
// 	} else {
// 		db.query("INSERT INTO locations (name, city, state, zip, lat, long, address) VALUES ('Golden Gate Bridge', 'San Francisco', 'California', 94129, 37.819929, -122.478255, 'Golden Gate Bridge, US Hwy. 101 N');", (err, table) => {
// 			if(err) {
// 				console.log(err);
// 			} else {
// 				console.log("INSERTED DATA SUCESS");
// 				db.end();
// 			}
// 		})
// 	}
// })

// API call to retrieve data when path hit
app.get('/api/search', function(req, res) {
	pool.connect((err, db, done) => {
		if(err) {
			return console.log(err);
		} else {
			db.query('SELECT * FROM locations;', (err, table) => {
				if(err) {
					console.log(err);
				} else {
					var output = JSON.stringify(table.rows);
					console.log(output);
					console.log("Data retrieved!");
					db.end();
				}
			})
		}
	});
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen(port, () => console.log("Listening on port: " + port));