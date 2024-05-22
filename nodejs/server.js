const express = require("express");
const { Client } = require("pg");
const app = express();
const port = 8080;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "Villas",
  password: "admin",
  port: 5432,
});

client.connect();

var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  client.query(`SELECT * FROM properties`, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      //res.send("Hello World!");
      res.json(result.rows);
    }
  });
});

app.post("/", (req, res) => {
  //res.send("POSTMAN Request Called");
  client.query(
    `INSERT INTO public.users(
      username, password)
      VALUES ( 'Jonathan', 'admin')`,
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        //res.send("Hello World!");
        res.send("DONE");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
