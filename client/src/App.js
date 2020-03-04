import React from 'react';
import logo from './logo.svg';
import './App.css';
import Decklist from './components/Decklist';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <CardDisplay />
          </Route>
          <Route exact path={["/decks"]}>
            <Decklist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
