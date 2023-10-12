import styled from "styled-components";

const CurrentIssueWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: bold;
  }

  h4:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .article {
    padding-top: 1rem;
    border-bottom: 1px solid #e5e6e6;
  }

  .current-issue-content {
    border-top: 2px solid #2a6eba;
    padding-bottom: 2rem;
  }

  .issue-img-btn {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;

    img {
      cursor: pointer;
      height: auto;
      width: 100%;
    }

    .issue-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      color: #2a6eba;
      span {
        cursor: pointer;
        font-size: 0.9rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (min-width: 600px) {
    .issue-img-btn {
      display: flex;
      flex-direction: column;
    }

    .page-and-articles {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2rem;
    }

    .articles {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }

  @media (min-width: 960px) {
    .issue-img-btn img {
      width: 80%;
    }
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
  }
`;

export default CurrentIssueWrapper;
