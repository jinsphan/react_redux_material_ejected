import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Component Imports
import { Fifa } from "app/containers";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Fifa} />
      </Switch>
    </Router>
  );
};

export default App;
