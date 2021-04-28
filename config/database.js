const {Pool} = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  max: 10,
  idleTimeoutMillis: 30000,
  ssl: { rejectUnauthorized: false }
};

const pool = new Pool(config);

pool.on('connect', () => {
  console.log(`Connected to database on port ${process.env.DATABASE_PORT}`);
});

module.exports = pool;
