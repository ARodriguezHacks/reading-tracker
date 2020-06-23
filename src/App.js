import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
