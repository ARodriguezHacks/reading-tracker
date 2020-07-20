import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
