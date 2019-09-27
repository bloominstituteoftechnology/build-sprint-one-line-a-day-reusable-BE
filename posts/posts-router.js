const express = require('express');

const Posts = require('./posts-model.js');

const router = express.Router();

const restricted = require('../auth/restricted-middleware.js');

router.get('/:id/posts', restricted, (req, res) => {
  const { id } = req.params;

  Posts.findPosts(id)
  .then(posts => {
    if (posts.length) {
      res.json(posts);
    } else {
      res.status(404).json({ message: 'Could not find posts for given user' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get posts' });
  });
});

router.post('/:id/posts', restricted, (req, res) => {
  const postData = req.body;
  const title = postData.title;
  const contents = postData.contents;
  const { id } = req.params;
  const post = {title: title, contents: contents, user_id:id}
  console.log(id)

  Posts.add(post)
  .then(post => {
    res.status(201).json(post);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new post' });
    console.log(err)
  });
});

router.put('/posts/:id', restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Posts.findById(id)
  .then(post => {
    if (post) {
      Posts.update(changes, id)
      .then(updatedPost => {
        res.json(updatedPost);
      });
    } else {
      res.status(404).json({ message: 'Could not find post with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update post' });
  });
});

router.delete('/posts/:id', restricted, (req, res) => {
  const { id } = req.params;

  Posts.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find post with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete post' });
  });
});

module.exports = router;