import styled from "styled-components";

const Wrapper = styled.article`
  width: 90vw;
  background-color: white;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  @media (min-width: 992px) {
    width: auto;
    .header {
      display: flex;
      align-items: center;
      gap: 5rem;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid #eeeeee;
    }
    .header-one {
      display: flex;
      gap: 0.5rem;
      p {
        color: #1d4ed8;
        font-weight: bold;
      }
    }
    .categories {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .category {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .success,
    .cat-one {
      border-right: 1px solid grey;
      padding-right: 1rem;
    }
  }
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #eeeeee;
  }
  .header-one {
    display: flex;
    gap: 0.25rem;
    p {
      color: #1d4ed8;
      font-weight: bold;
    }
  }
  .categories {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .success {
    color: #1d4ed8;
    font-weight: bold;
  }
  .category {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .success,
  .cat-one {
    border-right: 1px solid grey;
    padding-right: 0.5rem;
  }
  .amount {
    border-radius: 100%;
    padding: 0.25rem;
    background-color: #f7f8fd;
  }
  .candidate-info {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #eeeeee;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .short-name {
    border-radius: 100%;
    padding: 1rem;
    background-color: #edf4ff;
    color: #d0e1ff;
    font-size: 25px;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .name {
    font-size: 16px;
    font-weight: bold;
  }
  .country {
    font-size: 12px;
    font-weight: bold;
  }
  .status {
    font-size: 12px;
  }
  .level {
    font-size: 10px;
    color: #1d4ed8;
  }
  .footer {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 12px;
  }
  .footer-text {
    background-color: #f3fafc;
    color: #037092;
    padding: 0.25rem 0.5rem;
    border-radius: 2rem;
  }
`;
export default Wrapper;
