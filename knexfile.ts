import type { Knex } from "knex";

// Update with your config settings.

 const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "src/database/database.sqlite"
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'ts',
      directory: 'src/database/migrations'
    },
    seeds: {
      extension: 'ts',
      directory: 'src/database/seeds'
    }
  }
};

//module.exports = config;
export default config