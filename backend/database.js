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
  
  INSERT INTO users (id, email, password)
  VALUES 
    (gen_random_uuid(), 'user1@example.com', 'password1'),
    (gen_random_uuid(), 'user2@example.com', 'password2'),
    (gen_random_uuid(), 'user3@example.com', 'password3'),
    (gen_random_uuid(), 'user4@example.com', 'password4'),
    (gen_random_uuid(), 'user5@example.com', 'password5');
  
  -- Inserting data into the posts table
  INSERT INTO posts (id, authorName, userImg, date, content)
  VALUES 
    (1, 'Author Name 1', '../assets/pfp1.jpg', '2023-10-2', 'Looking for a test subject.'),
    (2, 'Author Name 2', '../assets/pfp2.jpg', '2022-12-31', 'Happy new year.'),
    (3, 'Author Name 3', '../assets/pfp3.jpg', '2023-08-09', 'Looking for a collaborator on my new song!!!'),
    (4, 'Author Name 4', '../assets/pfp4.jpg', '2022-01-15 13:45:00', 'Looking for a fourth member to our hackathon team! It''s a 8 week long process but it requires a lot of commitement. Worth 6 EAP!'),
    (5, 'Author Name 5', '../assets/pfp5.jpg', '2023-08-28', 'I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation.');
  
  -- Inserting data into the photos table
  INSERT INTO photos (id, fileName)
  VALUES 
    (1, '../assets/post1.jpg');
  `;

execute(createTblQuery).then((result) => {
  if (result) {
    console.log('Tables "users, posts, photos" is created');
  }
});

module.exports = pool;
