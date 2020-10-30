import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Menu from "./components/menu/menu";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
        </Switch>
      </Router>
      <Footer></Footer>
    </Container>
  );
}

export default App;
