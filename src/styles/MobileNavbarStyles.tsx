import styled from "styled-components";

const MobileNavbarWrapper = styled.div<{ clicked: boolean }>`
  display: none;

  ${(props) =>
    props.clicked
      ? "position: relative; display: block; padding-top: 4rem; width: 100%; margin: 0 auto;"
      : ""}

  background-color: #2a6ebb;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export default MobileNavbarWrapper;
