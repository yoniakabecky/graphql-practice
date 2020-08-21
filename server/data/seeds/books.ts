import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("books").del();

  // Inserts seed entries
  return await knex("books").insert([
    { id: 1, name: "Name of the Wind", genre: "Fantasy", authorId: 1 },
    { id: 2, name: "The Final Empire", genre: "Fantasy", authorId: 2 },
    { id: 3, name: "The Hero of Ages", genre: "Fantasy", authorId: 2 },
    { id: 4, name: "The Long Earth", genre: "Sci-Fi", authorId: 3 },
    { id: 5, name: "The Colour of Magic", genre: "Fantasy", authorId: 3 },
    { id: 6, name: "The Light Fantastic", genre: "Fantasy", authorId: 3 },
  ]);
}
