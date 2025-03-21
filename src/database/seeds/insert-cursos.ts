import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("cursos").insert([
     {name: "React"},
     {name: "Astro"},
     {name: "Express"},
     {name: "Python"},
     {name: "Ruby"},
     {name: "Django"},
    ]);
};
