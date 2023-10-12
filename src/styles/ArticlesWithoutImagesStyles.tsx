import styled from "styled-components";

const ArticleWithoutImages = styled.div`
  gap: 1rem;
  .article {
    padding-top: 1rem;
    border-bottom: 1px solid #e5e6e6;
  }

  .article:last-of-type {
    border: none;
  }

  .title:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .article {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export default ArticleWithoutImages;
