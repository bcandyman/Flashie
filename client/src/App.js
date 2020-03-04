import React from 'react';
import logo from './logo.svg';
import './App.css';

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
