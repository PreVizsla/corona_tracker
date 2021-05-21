import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Data from './Pages/Data'
import Details from './Pages/Details'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Data} exact />
        <Route path="/Details" component={Details} exact />
      </Switch>
    </Router>
  );
}

export default App;
