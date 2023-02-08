// @ts-check

export const up = (knex) =>
  knex.schema.createTable('event_comments', (table) => {
    table.string('comments_id').unsigned().index().references('comments.id');
    table.string('event_id').unsigned().index().references('event.id');
  });

export const down = (knex) => knex.schema.dropTable('comments');
