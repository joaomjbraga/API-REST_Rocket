import knex from "knex"
import config from "../../knexfile"

export const KNEX = knex(config.development)