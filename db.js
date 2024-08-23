/** Database for lunchly */
const pg = require("pg");
require('dotenv').config()

const db = new pg.Client(process.env.DATABASE_URL);

db.connect();

module.exports = db;