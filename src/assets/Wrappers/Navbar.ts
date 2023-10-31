import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  .logo {
    margin-right: 2rem;
  }
  .name {
    color: #1d4ed8;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .nav-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .opportunity {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4rem;
    background: white;
    padding: 0.5rem;
    color: #1d4ed8;
    border-radius: 2rem;
    margin-right: 3rem;
  }
  .opp-btn {
    background-color: transparent;
    border: none;
    color: #1d4ed8;
    cursor: pointer;
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    color: #444444;
    display: block;
    border-radius: 4px;
    /* padding: 10px; */
    width: 100%;
    margin-top: 0.25rem;
  }

  .dropdown-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #eeeeee;
  }
  .figure {
    background-color: #f8f8f8;
    padding: 0.25rem;
    border-radius: 0.75rem;
  }
  .dropdown-items:hover {
    background-color: #edf2ff;
    color: #1d4ed8;
    .figure {
      background-color: #d1ddff;
    }
  }
  .icons-container {
    display: flex;
  }
  .icon {
    display: none;
  }
  .next-stage {
    display: flex;
    align-items: center;
    background: #1d5ecd;
    color: #ffffff;
    padding: 0.5rem;
    border-radius: var(--borderRadius);
  }
  .next-text {
    font-size: 16px;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: transparent;
  .btn-container {
    position: relative;
  }

  @media (min-width: 992px) {
    .icons-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: 2rem;
    }
    .icon {
      display: inline;
      background: white;
      padding: 0.25rem;
      border-radius: 0.25rem;
      color: #444444;
    }
  }

  /* .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  } */

  /* .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  } */
  /* .show-dropdown {
    visibility: visible;
  } */
  /* .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  } */
  /* .logo-text {
    display: none;
    margin: 0;
  } */
  /* @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }} */

  @media (min-width: 992px) {
  }
`;
export default Wrapper;
