var pg = require("pg");
var conString = "postgres://postgres:admin@localhost:5432/Villas";

var client = new pg.Client(conString);
client.connect();
