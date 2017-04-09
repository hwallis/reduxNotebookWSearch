const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.get('/', (req, res) => {
  Note.find( ( err, notes) => {
    res.json(notes);
  });
});

router.post('/', (req, res) => {
  let { title, body } = req.body;
  new Note({
    title,
    body
  }).save( (err, note) => {
    if (err)
      return res.json(err);
    return res.json(note);
  });
});

router.put('/:id', (req, res) => {
  let { title, body } = req.body;
  Note.findByIdAndUpdate(
    req.params.id,
    { $set: { title, body, updatedAt: Date.now() }},
    { new: true },
    ( err, note) => {
      if (err)
        return res.json(err)
      return res.json(note)
    }
  )
});

router.delete('/:id', (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err)
      return res.json(err)
    return res.sendStatus(204);
  });
});

module.exports = router;
