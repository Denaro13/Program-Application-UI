import React from "react";
import {
  AiOutlineFileText,
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import Wrapper from "../assets/Wrappers/Filter";

const Filter: React.FC = () => {
  return (
    <Wrapper>
      <div className="search-container">
        <input type="text" placeholder="Search by name, edu, exp or #tag" />
        <i className="fas fa-search search-icon"></i>
        <AiOutlineSearch className="search-icon" />
        <AiOutlineInfoCircle className="warning-icon" />
        <i className="fas fa-exclamation-circle warning-icon"></i>
      </div>
      <div className="selected-filters">
        <div className="filter">
          <h4>Filters</h4>
          <span>0 Selected</span>
        </div>
        <div className="filter-list">
          <div className="filtered-items">
            <div className="left">
              <AiOutlineFileText />
              <span>Personal Information</span>
            </div>
            <AiOutlineDown className="icon" />
          </div>
          <div className="filtered-items">
            <div className="left">
              <AiOutlineFileText />
              <p>Education</p>
            </div>
            <AiOutlineDown className="icon" />
          </div>
          <div className="filtered-items">
            <div className="left">
              <AiOutlineFileText />
              <p>Work Experience</p>
            </div>
            <AiOutlineDown className="icon" />
          </div>
          <div className="filtered-items">
            <div className="left">
              <AiOutlineFileText />
              <p>Activity Filter</p>
            </div>
            <AiOutlineDown className="icon" />
          </div>
          <div className="filtered-items">
            <div className="left">
              <AiOutlineFileText />
              <p>Advanced Filter</p>
            </div>
            <AiOutlineDown className="icon" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filter;
