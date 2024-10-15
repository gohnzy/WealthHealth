const { Pool } = require('pg');

const pool = new Pool({
	user: 'gohnzy',
	host: 'localhost',
	database: 'WealthHealthDB',
	password: 'gohnzy1234',
	port: 2000,
});

const query = (text, params) => pool.query(text, params);
module.exports = { query };
