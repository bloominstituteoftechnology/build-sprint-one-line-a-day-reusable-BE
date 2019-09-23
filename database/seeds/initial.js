
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'first post', contents: 'some test text', user_id: '1'},
        {title: 'today', contents: 'test text', user_id: '3'},
        {title: 'next week', contents: 'seed text', user_id: '2'}
      ]);
    });
};
