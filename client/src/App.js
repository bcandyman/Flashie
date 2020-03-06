import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Decks from './pages/Decks';
import CardDisplay from './components/Card'

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
