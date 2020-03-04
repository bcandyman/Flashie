import React, { useEffect } from "react";
import API from "../utils/API";
import flashcards from "../flashcards.json"
import Decklist from "../components/Decklist";

function Decks() {

  useEffect(() => {
    
  }, [])

    return (
      flashcards.map((card)=>{
        return <Decklist DeckName={card.deckName}/>
      })
    );
}


export default Decks;