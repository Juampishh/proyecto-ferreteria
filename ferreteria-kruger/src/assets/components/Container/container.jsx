import React from "react";
import { StyledContainer } from "./StyledContainer";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

function Container() {
  return (
    <StyledContainer>
      <Navbar />
      <Home />
      <Footer />
    </StyledContainer>
  );
}

export default Container;
