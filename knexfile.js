// Update with your config settings.
const settings = require("./settings");
module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host     : settings.hostname,
      user     : settings.user,
      password : settings.password,
      database : settings.database,
      port     : settings.port,
      ssl      : settings.ssl
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
