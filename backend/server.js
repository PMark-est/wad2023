const express = require("express");
const pool = require("./database");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: "http://localhost:8080", credentials: true }));

app.use(express.json());
app.use(cookieParser());

// is used to check whether a user is authenticated
app.get("/auth/authenticate", async (req, res) => {
  console.log("authentication request has been arrived");
  const token = req.cookies.jwt; // assign the token named jwt to the token const
  //console.log("token " + token);
  let authenticated = false; // a user is not authenticated until proven the opposite
  try {
    if (token) {
      //checks if the token exists
      //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
      await jwt.verify(token, secret, (err) => {
        //token exists, now we try to verify it
        if (err) {
          // not verified, redirect to login page
          console.log(err.message);
          console.log("token is not verified");
          res.send({ authenticated: authenticated }); // authenticated = false
        } else {
          // token exists and it is verified
          console.log("author is authenticated");
          authenticated = true;
          res.send({ authenticated: authenticated }); // authenticated = true
        }
      });
    } else {
      //applies when the token does not exist
      console.log("author is not authenticated");
      res.send({ authenticated: authenticated }); // authenticated = false
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).send(err.message);
  }
});

// signup a user
app.post("/auth/signup", async (req, res) => {
  try {
    console.log("a signup request has arrived");
    //console.log(req.body);
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
    const bcryptPassword = await bcrypt.hash(password, salt); // hash the password and the salt
    const authUser = await pool.query(
      // insert the user and the hashed password into the database
      "INSERT INTO users(email, password) values ($1, $2) RETURNING*",
      [email, bcryptPassword]
    );
    console.log(authUser.rows[0].id);
    const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
    res
      .status(201)
      .cookie("jwt", token, { maxAge: 6000000, httpOnly: true })
      .json({ user_id: authUser.rows[0].id }).send;
  } catch (err) {
    console.error(err.message);
    res.status(400).send(err.message);
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    console.log("a login request has arrived");
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0)
      return res.status(401).json({ error: "User is not registered" });

    //Checking if the password is correct
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    //console.log("validPassword:" + validPassword);
    if (!validPassword)
      return res.status(401).json({ error: "Incorrect password" });

    const token = await generateJWT(user.rows[0].id);
    res
      .status(201)
      .cookie("jwt", token, { maxAge: 6000000, httpOnly: true })
      .json({ user_id: user.rows[0].id }).send;
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//logout a user = deletes the jwt
app.get("/auth/logout", (req, res) => {
  console.log("delete jwt request arrived");
  res.status(202).clearCookie("jwt").json({ Msg: "cookie cleared" }).send;
});

app.get("/api/getPosts", async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query("SELECT * FROM posts");
    res.json(posts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/api/posts/:id', async(req, res) => {
  try {
    console.log("get a post with route parameter request has arrived");
    const { id } = req.params;
    const posts = await pool.query(
        "SELECT * FROM posts WHERE id = $1", [id]
    );
    res.json(posts.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/api/images/:id", async (req, res) => {
  try {
    console.log(
      "get the images of a post with route parameter request has arrived"
    );
    // The req.params property is an object containing properties mapped to the named route "parameters".
    // For example, if you have the route /posts/:id, then the "id" property is available as req.params.id.
    const { id } = req.params; // assigning all route "parameters" to the id "object"
    const posts = await pool.query(
      // pool.query runs a single query on the database.
      //$1 is mapped to the first element of { id } (which is just the value of id).
      "SELECT * FROM photos WHERE id = $1",
      [id]
    );
    res.json(posts.rows); // we already know that the row array contains a single element, and here we are trying to access it
    // The res.json() function sends a JSON response.
    // This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log("Server is listening to port " + port);
});
