const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello message');
});

router.get('/:id', (req, res) => {
    res.send(`Hello message number ${req.params.id}`);
  });

module.exports = router;
