// @ts-check

export const up = (knex) =>
  knex.schema.createTable('promo_codes', (table) => {
    table.string('id').primary().notNullable();
    table
      .string('organization_id')
      .unsigned()
      .index()
      .references('organization.id');
    table.decimal('discount').notNullable();
    table.integer('code').notNullable();
  });

export const down = (knex) => knex.schema.dropTable('promo_codes');
