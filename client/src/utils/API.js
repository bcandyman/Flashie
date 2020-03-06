import axios from "axios";

export default {

  getDecks: () => axios.get("api/decks"),

  getDeck: (deckId) => axios.get(`api/deck/${deckId}`),

  saveDeck: (bookData) => { axios.post("/api/books", bookData) },
};
