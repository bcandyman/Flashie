import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardDisplay from './pages/CardDisplay';
import Decks from './pages/Decks'
import CreateDeck from './pages/CreateDeck'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <CardDisplay />
          </Route>
          <Route exact path={["/decks"]}>
            <Decks />
          </Route>
          <Route exact path={["/createdeck"]}>
            <CreateDeck />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
