import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
