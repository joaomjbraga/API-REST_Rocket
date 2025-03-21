import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('modulos', (table) => {
        table.increments('id').primary(),
        table.text('name').notNullable(),
        table.integer('curso_id').references('id').inTable('cursos')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('modulos')
}

