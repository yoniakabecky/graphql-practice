import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(
    "authors",
    (table: Knex.CreateTableBuilder) => {
      table.increments("id");
      table.string("name").notNullable();
      table.integer("age").notNullable();
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTableIfExists("authors");
}
