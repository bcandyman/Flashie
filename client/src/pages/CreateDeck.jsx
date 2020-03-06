import React, { useState, useEffect } from "react";
import API from '../utils/API';
import Card from '../components/Card'
import CardHeader from "../components/CardHeader";
import CardBody from "../components/CardBody";
import Button from "../components/Button";
import { Container } from "../components/Grid";
import { Ul, Li } from '../components/ListGroup'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'


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
        <CardHeader>Create A Deck</CardHeader>
        <CardBody>
          <Ul>
          <Label inputName="deckname">Deck Name </Label>
            <Form name="Deck Name">
              <Input id="deckname"/>
            </Form>
          </Ul>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Decks;
