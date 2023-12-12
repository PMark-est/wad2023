const express = require("express");
const pool = require("./database");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", async (req, res) => {
  try {
    console.log("get posts request has arrived");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log("Server is listening to port " + port);
});
