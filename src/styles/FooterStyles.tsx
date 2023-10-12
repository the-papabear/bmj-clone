import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: #2a6ebb;

  .wrapper {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  * {
    color: white;
  }

  .wrapper {
    padding: 0 1rem;
  }

  h4 {
    padding: 1rem 0;
  }

  .socials-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    h4 {
      display: none;
    }

    .social {
      display: flex;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .footer-navigation {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 2rem;
  }

  .category-options {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 1.5rem 0;

    p {
      font-size: 0.8rem;
      font-weight: 400;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .terms-and-conditions {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tnc-options {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
      align-content: center;
      justify-content: center;

      p {
        font-size: 0.8rem;
        padding: 0.3rem;
        border-right: 1px solid white;

        &:last-child {
          border: none;
        }
      }
    }

    small {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;
    }
  }

  @media (min-width: 600px) {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 3fr;
      align-items: start;

      width: 100%;

      h4 {
        display: none;
      }
    }

    .socials-wrapper {
      display: flex;
      flex-direction: column;

      h4 {
        display: block;
      }
    }

    .footer-navigation {
      grid-template-columns: repeat(3, 1fr);
    }

    .terms-and-conditions .tnc-options {
      display: flex;
    }
  }

  @media (min-width: 900px) {
    .terms-and-conditions {
      small {
        flex-direction: row;
        gap: 2rem;
      }
    }
  }
`;

export default FooterWrapper;
