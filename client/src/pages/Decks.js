import React, { useEffect , useState } from "react";
import API from '../utils/API'
import Decklist from "../components/Decklist";

function Decks() {

  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    loadCards()
  }, [])

  function loadCards() {
    API.getFlashcards()
      .then(res => setFlashcards(res.data))
    }

    return (
      flashcards.questions.map((card)=>{
        return <Decklist DeckName={card.deckName}/>
      })
    );
}


export default Decks;