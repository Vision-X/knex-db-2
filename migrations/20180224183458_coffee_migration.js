
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coffee', table => {
    table.increments('id').primary()
    table.text('name')
    table.text('roaster')
    table.integer('aroma').unsigned
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coffee')
};
