const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id/posts', (req, res) => {
  const { id } = req.params;

  Users.findById(id)
  .then(posts => {
    if (posts.length) {
      res.json(posts);
    } else {
      res.status(404).json({ message: 'Could not find journal entries for that user' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get journal entries' });
  });
});

module.exports = router;
