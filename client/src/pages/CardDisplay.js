import React, { useEffect } from "react";
import API from "../utils/API";
import flashcards from "../flashcards.json"
import Card from "../components/Card"

function CardDisplay() {

  useEffect(() => {
    
  }, [])

    return (
      flashcards.map((card)=>{
        return <Card DeckName={card.deckName} SideA={card.cardContent.SideA} SideB={card.cardContent.SideB}/>
      })
    );
}


export default CardDisplay;
