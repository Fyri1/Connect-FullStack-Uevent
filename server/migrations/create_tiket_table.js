// @ts-check

export const up = (knex) =>
  knex.schema.createTable('tikets', (table) => {
    table.string('id').primary().notNullable();
    table.string('event_id').unsigned().index().references('event.id');
    table.decimal('price').notNullable();
    table.integer('sell_ticket').notNullable();
    table.integer('count_ticket').notNullable();
  });

export const down = (knex) => knex.schema.dropTable('users');
