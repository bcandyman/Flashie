import React, { useState, useEffect } from "react";
import API from '../utils/API';
import Card from '../components/Card'
import CardHeader from "../components/CardHeader";
import CardBody from "../components/CardBody";
import Button from "../components/Button";
import { Container } from "../components/Grid";
import { Ul, Li } from '../components/ListGroup'


function Decks() {

  // Define state
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    API.getDecks()
      .then(data => setDecks(data.data))
      .catch(err => console.log(err));
  }, []);

  const handleOnClick=(e)=>{
    console.log(e.target.value);
    
  };

  return (
    <Container>
      <Card className='mt-5'>
        <CardHeader>Available Decks</CardHeader>
        <CardBody>
          <Ul>
            {decks.map((deck, index) => (
              <Li key={index}>
                <Button className='p-0' name={deck.name} value={deck._id} handleOnClick={handleOnClick}>✅</Button>
                {deck.name}
              </Li>
            ))}
          </Ul>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Decks;
