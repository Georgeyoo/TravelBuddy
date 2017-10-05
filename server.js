const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Client } = require('pg');


let app = express();

const port = process.env.PORT || 3000;


// Connect to Heroku Postgres DB
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: false,
});



client.connect();

client.query('SELECT * FROM locations;', (err, res) => {
	if (err) throw err;
	for (let row of res.rows) {
		console.log(JSON.stringify(row));
	}
	client.end();
})


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


// app.use('/', index);

app.listen(port, () => console.log("Listening on port " + port));