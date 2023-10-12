import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;

  height: 100%;
  width: 100%;

  .menu-1,
  .menu-2 {
    display: none;

    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    height: 100%;

    list-style-type: none;
    color: white;
  }

  li {
    display: flex;
    align-items: center;
    gap: 5px;

    height: 100%;
    cursor: pointer;
    padding: 0 0.5rem;
    font-weight: 400;
  }

  li:hover {
    background-color: #4f89c7;
    color: white;
  }

  .menu-1 {
    @media (min-width: 960px) {
      display: flex;
    }
  }

  .menu-2 {
    @media (min-width: 1280px) {
      display: flex;
    }
  }
`;

export const MobileNavigation = styled(NavigationWrapper)`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: unset;
  width: 100%;

  .menu-1,
  .menu-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: unset;
  }

  li {
    width: 100%;
    padding: 1rem 1rem;
    border-bottom: 1px solid rgb(217, 217, 218, 0.5);
  }

  @media (min-width: 600px) {
    .menu-2 li:last-of-type {
      border: none;
    }
  }

  @media (min-width: 960px) {
    .menu-1 {
      display: none;
    }

    .menu-2 li:last-of-type {
      border: none;
    }
  }
`;
