const db = require('../models');

module.exports = app => {
  // Add a new user created deck to the database
  app.post('/api/deck/create', (req, res) => {
    db.Deck.create(req.body)
      .then((data) => res.send(data))
      .catch(err => res.send(err));
  });

  // Retrieve a deck by the deck id
  app.get('/api/deck/:id', (req, res) => {
    db.Deck.findOne({ _id: req.params.id })
      .then(data => res.send(data))
      .catch(err => res.send(err));
  });
};
