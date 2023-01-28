// @ts-check

export const up = (knex) =>
  knex.schema.createTable('ticket', (table) => {
    table.string('id').primary().notNullable();
    table.string('event_id').unsigned().index().references('event.id');
    table.decimal('price').notNullable();
    table.boolean('is_sold').notNullable().defaultTo(false);
  });

export const down = (knex) => knex.schema.dropTable('ticket');
