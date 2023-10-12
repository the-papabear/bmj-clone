import styled from "styled-components";

const LatestArticlesWrapper = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    padding: none;
  }

  h3 {
    font-weight: bold;
  }

  p {
    padding: 0.5rem 0;
    font-weight: 400;
  }

  img {
    height: auto;
    width: 100%;
  }

  .latest-articles-category {
    padding-bottom: 1rem;
  }

  .title:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .latest-articles-blue {
    border-top: 2px solid #2a6eba;
  }

  .latest-articles-purple {
    border-top: 2px solid #7e5ec4;
  }

  .latest-articles-red {
    border-top: 2px solid #cb2331;
  }

  .latest-articles-green {
    border-top: 2px solid #34b2a8;
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default LatestArticlesWrapper;
