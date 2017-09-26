// const pg = require("pg");
const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  version: '7.3',
  connection: {
    host     : settings.hostname,
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    port     : settings.port,
    ssl      : settings.ssl
  }
});



knex('famous_people').insert({first_name: 'George'});
// knex.insert({first_name: "George", last_name: "Washington" }).into("famous_people");

knex('famous_people').asCallback((error, famous_people) => {
  console.log(famous_people);
});