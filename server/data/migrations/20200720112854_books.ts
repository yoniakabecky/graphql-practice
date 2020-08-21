import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(
    "books",
    (table: Knex.CreateTableBuilder) => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("genre").notNullable();
      table.string("authorId").references("id").inTable("authors");
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTableIfExists("books");
}
