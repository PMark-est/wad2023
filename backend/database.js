const Pool = require("pg").Pool;
const pool = new Pool({
  user: "...",
  password: "...",
  database: "testWad",
  host: "localhost",
  port: "5432",
});

module.exports = pool;
