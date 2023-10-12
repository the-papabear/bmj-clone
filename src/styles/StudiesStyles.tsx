import styled from "styled-components";

const StudiesWrapper = styled.section`
  .title:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .mid-page-ad {
    padding: 2rem 0;
  }

  .jobs-list {
    border-top: 2px solid #69be28;
  }

  .article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e5e6e6;
  }

  .study-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  .studies {
    border-top: 2px solid #2a6eba;
  }

  .study-article {
    border-bottom: 1px solid #e5e6e6;
    padding: 1rem 0;
  }

  .study-article:hover {
    cursor: pointer;
    h3 {
      text-decoration: underline;
    }
  }

  .article-details {
    display: flex;
    width: 100%;
    gap: 1rem;

    .article-img {
      width: 40%;

      & img {
        height: auto;
        width: 100%;
      }
    }

    .article-description {
      width: 60%;
    }
  }

  @media (min-width: 600px) {
    .study {
      display: flex;
      gap: 1rem;
    }
  }

  @media (min-width: 960px) {
    .mid-page-ad {
      padding: 0;
    }
    .study-section {
      flex-direction: row;
      gap: 2rem;
      align-items: flex-start;
    }

    .study-wrapper {
      margin-top: 4.25rem;
    }
  }
`;

export default StudiesWrapper;
