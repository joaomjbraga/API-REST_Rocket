import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "src/database"
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'ts',
      directory: 'src/database/migrations'
    }
  }

};

module.exports = config;
