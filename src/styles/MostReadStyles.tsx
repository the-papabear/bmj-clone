import styled from "styled-components";

const MostReadWrapper = styled.section`
  .most-read-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 0;
    border-top: 2px solid #2a6eba;
  }

  .list-item {
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 1rem 0;

    span {
      font-size: 1.5rem;
    }

    p {
      font-weight: 300;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 600px) {
    .most-read-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    p {
      font-weight: 500;
      font-size: 1.1rem;
    }
  }

  @media (min-width: 960px) {
    width: 73%;
  }
`;

export default MostReadWrapper;
