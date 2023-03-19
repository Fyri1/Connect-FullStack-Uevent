// @ts-check

export const up = (knex) =>
  knex.schema.createTable('like_comments', (table) => {
    table.string('user_id').unsigned().index().references('users.id');
    table.string('comment_id').unsigned().index().references('comments.id');
  });

export const down = (knex) => knex.schema.dropTable('like_comments');
