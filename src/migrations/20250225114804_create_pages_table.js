const tableName = "pages";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("slug").notNullable();
    table.text("content").notNullable();
    table.boolean("is_homepage");
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
