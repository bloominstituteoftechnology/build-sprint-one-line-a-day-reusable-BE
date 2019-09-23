exports.up = function(knex) {
    // knex.schema.hasTable('users').then(function(exists) {
    //   if (!exists) {
        return knex.schema.createTable('users', users => {
          users.increments();
      
          users
            .string('username', 128)
            .notNullable()
            .unique();
          users.string('password', 128).notNullable();
        })
        .createTable('posts', posts => {
            posts.increments();
            posts.string('title', 1024).notNullable();
            posts.text('contents').notNullable();
    
            posts.integer('user_id').unsigned().notNullable().references('id').inTable('users');
            posts.timestamps(true, true);
          });
};
  
  exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('posts')
  };