import React, { useState, useEffect } from "react";
import API from '../utils/API';
let currentDeck = {};

function CardDisplayTest() {

  const [cardIndex, setCardIndex] = useState(-1);

  useEffect(() => {
    API.getDeck('5e5b5a918081cb1158bd8f7c')
      .then(data => {
        currentDeck = data.data
        setCardIndex(0)
      })
      .catch(err => console.log(err));
  }, [])

  const handleOnClick = () => {
    setCardIndex(cardIndex + 1)
  }


  const ifDeckIsPopulated = () => {
    if (Object.keys(currentDeck).length !== 0) {
      return <h1>{currentDeck.questions[cardIndex].question}</h1>
    }
  }

  return (
    <div>
      {ifDeckIsPopulated()}
      <button onClick={handleOnClick}>click</button>
    </div>
  );
}

export default CardDisplayTest;
