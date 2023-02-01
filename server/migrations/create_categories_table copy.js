// @ts-check

export const up = (knex) =>
  knex.schema.createTable('categories', (table) => {
    table.string('id').primary().notNullable();
    table.string('event_id').unsigned().index().references('event.id');
    table.string('title').notNullable();
    table.string('discription').notNullable();
  });

export const down = (knex) => knex.schema.dropTable('categories');
