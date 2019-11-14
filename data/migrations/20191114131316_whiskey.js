
exports.up = function(knex) {
    return knex.schema.createTable('whiskey', table => {
        table.increments();
        table.varchar('name', 255).notNullable().unique();
        table.varchar('type', 255).notNullable();
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('whiskey');  
};
