import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('cursos', (table) => {
        table.increments('id').primary(),
        table.text('name').notNullable(),
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('cursos')
}

