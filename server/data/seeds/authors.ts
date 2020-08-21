import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("authors").del();

  // Inserts seed entries
  return await knex("authors").insert([
    { id: 1, name: "Patrick Rothfuss", age: 44 },
    { id: 2, name: "Brandon Sanderson", age: 42 },
    { id: 3, name: "Terry Pratchett", age: 66 },
  ]);
}
