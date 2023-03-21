// @ts-check

export const up = (knex) =>
  knex.schema.createTable('user_favorite_events', (table) => {
    table.string('user_id').unsigned().index().references('users.id');
    table.string('event_id').unsigned().index().references('events.id');
  });

export const down = (knex) => knex.schema.dropTable('user_favorite_events');
