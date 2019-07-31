// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/dev.sqlite3'
    },
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,

  //   // {
  //   //   database: 'my_db',
  //   //   user:     'username',
  //   //   password: 'password'
  //   // },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL +'?ssl=true',
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: "./datatbase/migrations"
    },
    seeds: {
        directory: "./datatbase/seeds"
    },
    useNullAsDefault: true
}

};
