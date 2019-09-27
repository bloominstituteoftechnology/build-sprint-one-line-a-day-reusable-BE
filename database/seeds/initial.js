
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'first post', contents: 'some test text', user_id: '4', created_at: '2019-09-26'},
        {title: 'today', contents: 'test text', user_id: '4', created_at: '2018-09-26'},
        {title: 'next week', contents: 'seed text', user_id: '4', created_at: '2017-09-26'}
      ]);
    });
};
