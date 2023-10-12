import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  background-color: #2a6ebb;

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    gap: 0.5em;
    width: 100%;
    height: 100%;
    max-width: 1280px;
  }
  button {
    background-color: #2a6ebb;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #4f89c7;
    }

    .menu {
      color: #ffffff;
      font-size: 30px;

      @media (min-width: 1280px) {
        visibility: hidden;
      }
    }
  }

  .search {
    display: flex;
    align-items: center;

    position: relative;
    height: 100%;
    padding: 0 1rem;
    cursor: pointer;

    color: #77a2d3;

    span {
      color: white;
      @media (max-width: 1280px) {
        display: none;
      }
    }
  }

  .search:hover {
    background-color: #4f89c7;
    color: white;
  }

  .logo {
    cursor: pointer;
  }

  @media (min-width: 1280px) {
    button {
      display: none;
    }
  }
`;

export default NavbarWrapper;
