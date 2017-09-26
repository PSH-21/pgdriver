const pg = require("pg");
const settings = require("./settings"); // settings.json
let args = process.argv.slice(2);

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT first_name, last_name, birthdate FROM famous_people WHERE last_name = $1", [args[0]], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    for (let person of result.rows) {
      const { first_name, last_name, birthdate } = person;
      console.log(`${first_name} ${last_name}, born '${birthdate.getFullYear()}-${birthdate.getMonth()}-${birthdate.getDay()}'`);
    }

    client.end();
  });
});