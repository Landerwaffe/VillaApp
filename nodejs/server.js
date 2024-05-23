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
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

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

app.post("/", jsonParser, (req, res) => {
  //res.send("POSTMAN Request Called");
  console.log("Request object is: ");
  console.log(req.body.email);
  client.query(
    `INSERT INTO public.users(
      username, password)
      VALUES ( 'C' , 'C')`,
    //["B", "B"],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        //res.send("Hello World!");
        res.send("DONE");
        //console.log(req.params);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
