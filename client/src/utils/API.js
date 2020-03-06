import axios from "axios";
import mongoose from "mongoose"

export default {
  // Gets all books
    getFlashcards: function(query) {
    return axios.get('/api/deck/:id', { params: { id: query } })
    
//     (req, res) => {
//         db.Deck.findOne({ _id: req.params.id })
//           .then(data => res.send(data))
//           .catch(err => res.send(err));
//       });
    },
};
