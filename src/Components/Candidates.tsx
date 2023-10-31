import React from "react";
import { AiOutlineBorder } from "react-icons/ai";
import Wrapper from "../assets/Wrappers/Candidates";

const Candidates: React.FC = () => {
  return (
    <Wrapper>
      <div className="header">
        <div className="header-one">
          <AiOutlineBorder />
          <p>247 Candidates</p>
        </div>
        <div className="categories">
          <p className="success">Qualified</p>
          <div className="category cat-one">
            <p>Task</p>
            <span className="amount">25</span>
          </div>
          <div className="category">
            <p>Disqualified</p>
            <span className="amount">78</span>
          </div>
        </div>
      </div>
      <div className="candidate-info">
        <div className="info">
          <AiOutlineBorder />
          <span className="short-name">AS</span>
        </div>
        <div className="details">
          <h4 className="name">Aaliyah Sanderson</h4>
          <h5 className="country">Riyadh, Saudi Arabia</h5>
          <p className="status">
            Bachelor - Cambridge University (2023 - 2023)
          </p>
          <span className="level">#top-candidate #top-candidate</span>
          <footer className="footer">
            <p className="footer-text">New York</p>
            <p className="footer-text">Marketing</p>
            <p className="footer-text">London</p>
          </footer>
        </div>
      </div>
      <div className="candidate-info">
        <div className="info">
          <AiOutlineBorder />
          <span className="short-name">AS</span>
        </div>
        <div className="details">
          <h4 className="name">John Doe</h4>
          <h5 className="country">Bostom, USA</h5>
          <p className="status">Bachelor - MIT (2023 - 2023)</p>
          <span className="level">#top-candidate #top-candidate</span>
          <footer className="footer">
            <p className="footer-text">New York</p>
            <p className="footer-text">Marketing</p>
            <p className="footer-text">London</p>
          </footer>
        </div>
      </div>
      <div className="candidate-info">
        <div className="info">
          <AiOutlineBorder />
          <span className="short-name">AS</span>
        </div>
        <div className="details">
          <h4 className="name">Thomas Matt</h4>
          <h5 className="country">Edlnburgh, UK</h5>
          <p className="status">Bachelor - Harvard University (2023 - 2023)</p>
          <span className="level">#top-candidate #top-candidate</span>
          <footer className="footer">
            <p className="footer-text">New York</p>
            <p className="footer-text">Marketing</p>
            <p className="footer-text">London</p>
          </footer>
        </div>
      </div>
      <div className="candidate-info">
        <div className="info">
          <AiOutlineBorder />
          <span className="short-name">AS</span>
        </div>
        <div className="details">
          <h4 className="name">Kamilia Smith</h4>
          <h5 className="country">London, UK</h5>
          <p className="status">Bachelor - Boston University (2023 - 2023)</p>
          <span className="level">#top-candidate #top-candidate</span>
          <footer className="footer">
            <p className="footer-text">New York</p>
            <p className="footer-text">Marketing</p>
            <p className="footer-text">London</p>
          </footer>
        </div>
      </div>
      <div className="candidate-info">
        <div className="info">
          <AiOutlineBorder />
          <span className="short-name">AS</span>
        </div>
        <div className="details">
          <h4 className="name">Roy Jade</h4>
          <h5 className="country">Cambridge, UK</h5>
          <p className="status">Bachelor -Yale (2023 - 2023)</p>
          <span className="level">#top-candidate #top-candidate</span>
          <footer className="footer">
            <p className="footer-text">New York</p>
            <p className="footer-text">Marketing</p>
            <p className="footer-text">London</p>
          </footer>
        </div>
      </div>
      <div className="candidate-info">
        <div className="info">
          <AiOutlineBorder />
          <span className="short-name">AS</span>
        </div>
        <div className="details">
          <h4 className="name">Ahmed Salman</h4>
          <h5 className="country">New York, USA</h5>
          <p className="status">Bachelor -Cambridge University (2023 - 2023)</p>
          <span className="level">#top-candidate #top-candidate</span>
          <footer className="footer">
            <p className="footer-text">New York</p>
            <p className="footer-text">Marketing</p>
            <p className="footer-text">London</p>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
};

export default Candidates;
