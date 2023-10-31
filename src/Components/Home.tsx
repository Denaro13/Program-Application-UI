import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Wrapper from "../assets/Wrappers/Home";

const Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    </>
  );
};

export default Home;
