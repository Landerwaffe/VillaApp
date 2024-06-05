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

const cacheManager = require("cache-manager");
const memoryCache = cacheManager.caching({
  store: "memory",
  max: 100,
  ttl: 60 /* seconds */,
});

function loginUser(userId, sessionData) {
  memoryCache.set(userId, sessionData, { ttl: 604800 }); // Set TTL to 7 days
}

// Example: Caching API responses
async function fetchDataFromAPI(url) {
  const cachedData = await memoryCache.get(url);

  if (cachedData) {
    return cachedData;
  }

  const data = await fetchData(url);
  await memoryCache.set(url, data);

  return data;
}

app.use(cors());

app.get("/", (req, res) => {
  const queryType = req.query.type;

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
  } else if (queryType == "Details") {
    client.query(`SELECT * FROM public.details`, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        //res.send("Hello World!");
        res.json(result.rows);
      }
    });
  }
});

app.post("/", jsonParser, (req, res) => {
  const queryType = req.query.type;

  if (queryType == "Register") {
    if (req.body.email && req.body.password != null) {
      //res.send("POSTMAN Request Called");
      console.log("Went to Registration Backend");
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
  } else if (queryType == "Login") {
    //console.log("New Login Backend Handling");
    client.query(
      `SELECT * FROM public.users WHERE username =` +
        "'" +
        req.body.email +
        "'",
      (err, result) => {
        if (req.body.email && req.body.password != null) {
          console.log("Went to Login Backend");
          console.log("Result is: " + JSON.stringify(result.rows[0].password));
          //console.log("Result from row: " + JSON.stringify(result.rows[0]));
          console.log(
            "Username and password are: " +
              req.body.email +
              " and " +
              JSON.stringify(req.body.password)
          );
          if (
            JSON.stringify(req.body.password) ==
            JSON.stringify(result.rows[0].password)
          ) {
            console.log("Password Correct!");
          } else {
            console.log("Password Wrong!");
          }
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
