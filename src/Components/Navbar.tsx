import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/Navbar";
import {
  AiOutlineDown,
  AiOutlineTag,
  AiOutlineUserDelete,
  AiOutlineUserAdd,
  AiOutlineUserSwitch,
  AiOutlineMail,
} from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    console.log("dropdown");
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">
          <h3 className="name">London Internship Program</h3>
          <p>London</p>
        </div>
        <div className="nav-details">
          <div className="opportunity">
            <p>Opportunity browsing</p>
            <button type="button" className="opp-btn" onClick={toggleDropdown}>
              <AiOutlineDown />
            </button>
            {isDropdownVisible && (
              <div className="dropdown">
                {/* Dropdown items */}
                <div>
                  <div className="dropdown-items">
                    <p>Applied</p>
                    <span className="figure">1745</span>
                  </div>
                  <div className="dropdown-items">
                    <p>shortlisted</p>
                    <span className="figure">453</span>
                  </div>
                  <div className="dropdown-items">
                    <p>Technical Interview</p>
                    <span className="figure">123</span>
                  </div>
                  <div className="dropdown-items">
                    <p>Opportunity Browsing</p>
                    <span className="figure">243</span>
                  </div>
                  <div className="dropdown-items">
                    <p>Video Interview I</p>
                    <span className="figure">25</span>
                  </div>
                  <div className="dropdown-items">
                    <p>Video Interview II</p>
                    <span className="figure">25</span>
                  </div>
                  <div className="dropdown-items">
                    <p>Video Interview III</p>
                    <span className="figure">25</span>
                  </div>
                  <div className="dropdown-items">
                    <p>Offer</p>
                    <span className="figure">25</span>
                  </div>
                  <div className="dropdown-items">
                    <p>Withdrawn</p>
                    <span className="figure">25</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="icons-container">
            <span className="icon">
              <AiOutlineTag />
            </span>
            <span className="icon">
              <AiOutlineUserDelete />
            </span>
            <span className="icon">
              <AiOutlineUserAdd />
            </span>
            <span className="icon">
              <AiOutlineUserSwitch />
            </span>
            <span className="icon">
              <AiOutlineMail />
            </span>
            <div className="next-stage">
              <h4 className="next-text">move to video interview</h4>
              <AiOutlineDown />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
