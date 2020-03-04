import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CardDisplay from './pages/CardDisplay';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <CardDisplay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
