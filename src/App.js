import React from "react";
import Home from "./components/Home";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="sm">
      <h1>Reading List and Tracker</h1>
      <Home />
    </Container>
  );
}

export default App;
