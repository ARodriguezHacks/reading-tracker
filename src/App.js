import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
