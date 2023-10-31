import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  width: 90vw;

  .section-center {
    display: grid;
    /* grid-template-rows: auto auto; */
    gap: 2rem;
    margin-top: 2rem;
    width: 90vw;
  }
  @media (min-width: 992px) {
    flex: 1;
    margin-left: 50px;
    .section-center {
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-top: 2rem;
      width: 90vw;
    }
  }
`;
export default Wrapper;
