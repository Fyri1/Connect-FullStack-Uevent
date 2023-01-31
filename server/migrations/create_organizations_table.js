// @ts-check

export const up = (knex) =>
  knex.schema.createTable('organization', (table) => {
    table.string('id').primary().notNullable();
    table.string('user_id').unsigned().index().references('users.id');
    table.string('name_organization').notNullable();
    table.string('phone_organization').notNullable();
    table.string('phone_staff').notNullable();
    table.string('address').notNullable();
    table.string('email').notNullable();
    table.string('description').notNullable();
    table.string('link_organization');
    table.boolean('is_confirmed').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

export const down = (knex) => knex.schema.dropTable('organization');
