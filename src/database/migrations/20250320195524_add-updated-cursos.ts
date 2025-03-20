import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('cursos',(column) => {
        column.timestamp('updated_at').defaultTo(knex.fn.now()).after('created_at')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('cursos', (column) => {
        column.dropColumn('updated_at')
    })
}

