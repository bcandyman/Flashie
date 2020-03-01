require('../config/connection');
const db = require('../models');
const deckData = require('./seedDeck.json');

db.Deck.create(deckData)
  .then(console.log('Deck data has been successfully inserted into MongoDB.'));
