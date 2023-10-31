import React from "react";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineFileText,
  AiOutlineLeft,
} from "react-icons/ai";
import { PiNotebookBold } from "react-icons/pi";
import Wrapper from "../assets/Wrappers/Sidebar";

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <div className="first-container">
        <div className="first-box"></div>
        <AiFillHome className="home-icon" />
        <AiOutlineUser />
        <AiOutlineFileText />
        <PiNotebookBold />
        <AiOutlineLeft />
      </div>
      <div className="second-container">
        <AiOutlineSetting />
        <div className="second-box">AS</div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
