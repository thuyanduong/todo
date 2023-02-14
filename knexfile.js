// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'railway',
      user:     'postgres',
      password: ''
    }
  },

  production: {
    client: 'pg',
    connection: 'postgresql://postgres:Hf6fdE6UzFYbkL44NBb9@containers-us-west-118.railway.app:6551/railway',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
