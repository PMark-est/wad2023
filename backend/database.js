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
    userImg VARCHAR(255) NOT NULL,
    date DATE NOT NULL DEFAULT DATE(CURRENT_TIMESTAMP),
    content VARCHAR(1000) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "photos" (
    id INT NOT NULL,
    fileName VARCHAR(255) NOT NULL
  );
  
  INSERT INTO users (id, email, password)
  VALUES 
    (gen_random_uuid(), 'user1@example.com', 'password1'),
    (gen_random_uuid(), 'user2@example.com', 'password2'),
    (gen_random_uuid(), 'user3@example.com', 'password3'),
    (gen_random_uuid(), 'user4@example.com', 'password4'),
    (gen_random_uuid(), 'user5@example.com', 'password5');
  
  -- Inserting data into the posts table
  INSERT INTO posts (authorName, userImg, date, content)
  VALUES 
    ('Marko', 'pfp1.jpg', '2023-10-2', 'Looking for a test subject.'),
    ('Arkadi', 'pfp2.jpg', '2022-12-31', 'Happy new year.'),
    ('Martin', 'pfp3.jpg', '2023-08-09', 'Looking for a collaborator on my new song!!!'),
    ('Karl', 'pfp4.jpg', '2022-01-15', 'Looking for a fourth member to our hackathon team! It''s a 8 week long process but it requires a lot of commitement. Worth 6 EAP!'),
    ('Raya', 'pfp5.jpg', '2023-08-28', 'I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation.');
  
  -- Inserting data into the photos table
  INSERT INTO photos (id, fileName)
  VALUES 
    (1, 'post1.jpg');
  `;

execute(createTblQuery).then((result) => {
  if (result) {
    console.log('Tables "users, posts, photos" is created');
  }
});

module.exports = pool;
