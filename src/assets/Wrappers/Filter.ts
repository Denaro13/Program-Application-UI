import styled from "styled-components";

const Wrapper = styled.article`
  .search-container {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
  }
  .search-container input[type="text"] {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    width: 310px;
    /* padding-right: 2rem; */
    padding-left: 30px;
  }

  /* Style for the search icon */
  .search-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #9aa6ac;
    cursor: pointer;
  }

  /* Style for the warning icon */
  .warning-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #9aa6ac;
  }

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #eeeeee;
  }
  .filtered-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0.5rem;
    border-bottom: 1px solid #eeeeee;
    background: white;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .icon {
    color: #1d4ed8;
  }
`;
export default Wrapper;
