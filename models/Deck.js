const mongoose = require('mongoose');

const { Schema } = mongoose;
const DeckSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  user_rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  subject: {
    type: String,
    required: true,
    minlength: 1,
  },
  author: {
    type: String,
    required: true,
    minlength: 1,
  },
  questions: [{
    question: {
      type: String,
      required: true,
      minlength: 1,
    },
    answer: {
      type: String,
      required: true,
      minlength: 1,
    },
  }],
});

const Deck = mongoose.model('Deck', DeckSchema);

module.exports = Deck;
