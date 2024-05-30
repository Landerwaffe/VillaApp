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
  const queryType = req.query.type;
  const queryID = parseInt(req.query.id);
  const queryCategory = req.query.category;
  console.log("Query Type is: " + queryType);
  if (queryType == "Flatlist") {
    client.query(`SELECT * FROM properties`, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        //res.send("Hello World!");
        console.log("Sending Flatlist Rows");
        res.json(result.rows);
      }
    });
  } else if (queryCategory == "Details") {
    client.query(
      `SELECT * FROM public.details WHERE ID =` + queryID,
      (err, result) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          //res.send("Hello World!");
          res.json(result.rows);
        }
      }
    );
  }
});

app.post("/", jsonParser, (req, res) => {
  //console.log(req.body.subtitle);
  if (req.body.email && req.body.password != null) {
    //res.send("POSTMAN Request Called");
    console.log("Request object is: ");
    console.log(req.body.email);
    client.query(
      `INSERT INTO public.users(
      username, password)
      VALUES ( $1 , $2)`,
      [req.body.email, req.body.password],
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
  }
  if (
    req.body.name &&
    req.body.subtitle &&
    req.body.image &&
    req.body.description != null
  ) {
    //res.send("POSTMAN Request Called");
    client.query(
      `INSERT INTO public.properties(
      name, subtitle, image, description)
      VALUES ( $1 , $2, $3, $4)`,
      [req.body.name, req.body.subtitle, req.body.image, req.body.description],
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
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
