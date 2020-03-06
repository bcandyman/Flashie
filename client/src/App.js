import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardDisplay from './pages/CardDisplay';
import CardDisplayTest from './pages/CardDisplayTest';
import Decks from './pages/Decks'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <CardDisplay />
          </Route>
          <Route exact path={["/deck"]}>
            <CardDisplayTest />
          </Route>
          <Route exact path={["/decks"]}>
            <Decks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
