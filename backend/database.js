const Pool = require("pg").Pool;

const pool = new Pool({
  //user: "...",
  //password: "...",
  //database: "testWad",
  user: "marko",
  password: "marko",
  database: "testwad",
  host: "localhost",
  port: "5432",
});

const execute = async (query) => {
  try {
    await pool.connect(); // create a connection
    await pool.query(query); // executes a query
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

const createTblQuery = `
  CREATE TABLE IF NOT EXISTS "users" (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL 
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
    id SERIAL PRIMARY KEY NOT NULL,
    authorName VARCHAR(255) NOT NULL,
    userImg VARCHAR(255) NOT NULL UNIQUE,
    date DATE NOT NULL,
    content VARCHAR(1000) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "photos" (
    id INT NOT NULL,
    fileName VARCHAR(255) NOT NULL UNIQUE
);
  `;

execute(createTblQuery).then((result) => {
  if (result) {
    console.log('Tables "users, posts, photos" is created');
  }
});

module.exports = pool;
