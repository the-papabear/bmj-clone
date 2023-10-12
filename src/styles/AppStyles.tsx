import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 1280px;
  padding: 2rem 1rem;
  width: 100%;
  position: relative;
  margin: 0 auto;

  .category-and-date > *,
  .category {
    font-weight: 300;
    font-size: 12px;
  }

  .category:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default AppWrapper;
