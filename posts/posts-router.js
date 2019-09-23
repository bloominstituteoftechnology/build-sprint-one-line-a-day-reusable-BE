const express = require('express');

const Posts = require('./posts-model.js');

const router = express.Router();

// router.get('/', (req, res) => {
//   Posts.find()
//   .then(posts => {
//     res.json(posts);
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get posts' });
//   });
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Posts.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       res.json(scheme);
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get Posts' });
//   });
// });

router.get('/:id/posts', (req, res) => {
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

router.post('/:id/posts', (req, res) => {
  const postData = req.body;

  Posts.add(postData)
  .then(post => {
    res.status(201).json(post);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new post' });
  });
});

router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  Posts.findById(id)
  .then(scheme => {
    if (scheme) {
      Posts.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new step' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Posts.findById(id)
  .then(scheme => {
    if (scheme) {
      Posts.update(changes, id)
      .then(updatedScheme => {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update scheme' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Posts.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});

module.exports = router;