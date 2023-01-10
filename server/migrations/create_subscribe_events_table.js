// @ts-check

export const up = (knex) =>
  knex.schema.createTable('subscribe_events', (table) => {
    table.string('id').primary().notNullable();
    table.string('user_id').unsigned().index().references('users.id');
    table.string('event_id').unsigned().index().references('events.id');
  });

export const down = (knex) => knex.schema.dropTable('users');
