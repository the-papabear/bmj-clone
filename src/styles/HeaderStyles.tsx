import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: none;
  padding: 0 2rem;

  .wrapper {
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 600px) {
    display: block;
    height: 35px;
    width: 100%;
    background-color: #e5e6e6;

    font-size: 14px;

    .menubar {
      display: flex;
      gap: 1.5rem;

      color: #235b9a;
    }

    span {
      font-weight: 400;
    }

    span:hover {
      cursor: pointer;
      color: #4f89c7;
      text-decoration: underline;
    }
  }
`;

export const MobileHeaderWrapper = styled(HeaderWrapper)`
  display: flex;
  padding: unset;

  .wrapper {
    padding: unset;
    width: 100%;
  }

  .menubar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
  span {
    width: 100%;
    padding: 1rem 1rem;
    border-bottom: 1px solid rgb(217, 217, 218, 0.5);
    color: white;

    &:last-of-type {
      border: none;
    }
  }

  span:hover {
    background-color: #4f89c7;
    color: white;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
