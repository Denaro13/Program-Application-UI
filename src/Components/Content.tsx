import React from "react";
import Candidates from "./Candidates";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Wrapper from "../assets/Wrappers/Content";

const Content: React.FC = () => {
  return (
    <Wrapper className="content">
      <Navbar />
      <section className="section-center">
        <Filter />
        <Candidates />
      </section>
    </Wrapper>
  );
};

export default Content;
