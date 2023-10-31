import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  position: fixed;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    min-height: 100vh;
    height: 100%;
    width: 50px;
    padding: 1rem 0;
    /* box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1); */
    .first-container {
      display: flex;
      flex-direction: column;
      row-gap: 3rem;
      /* transition: var(--transition); */
    }

    .second-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 3rem;
    }
    .first-box {
      width: 1rem;
      height: 1rem;
      background: #d9d9d9;
      border-radius: 100%;
      margin-bottom: 1rem;
    }
    .second-box {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      display: grid;
      place-items: center;
      text-align: center;
      background: #d7e5fd;
      color: #b1cdfd;
    }
    /* .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    } */
  }
`;
export default Wrapper;
