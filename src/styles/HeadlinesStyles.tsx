import styled from "styled-components";

const HeadlinesWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  line-height: 1.5rem;

  .headline-wrapper {
    width: 100%;

    .main-headline-article:hover {
      cursor: pointer;
      h2 {
        text-decoration: underline;
      }
    }

    .headline-bio h2 {
      display: none;
    }

    .headline-image {
      height: auto;
      width: 100%;
    }

    .ltr {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;

      .bio {
        width: 50%;

        & p {
          font-size: 0.8em;
        }
      }

      .headline-img {
        width: 50%;
      }
    }
  }

  .secondary-headline {
    height: inherit;
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #e5e6e6;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      cursor: pointer;
      h3 {
        text-decoration: underline;
      }
    }

    .desktop-title {
      display: none;
    }
  }

  @media (min-width: 600px) {
    .main-headline-article {
      padding-left: 1rem;
      background-color: #f2f2f2;
    }

    .main-headline {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;

      text-align: left;

      .headline-bio {
        order: 1;
      }

      .headline-image {
        order: 2;
      }
    }

    .secondary-headlines {
      display: flex;
      gap: 2rem;
      border-bottom: 1px solid #e5e6e6;

      .mobile-title {
        display: none;
      }

      .secondary-headline {
        border: none;

        .ltr {
          flex-direction: column;
          width: 100%;

          .headline-img {
            width: 100%;
          }

          .bio {
            width: 100%;
          }
        }

        .desktop-title {
          display: block;
        }
      }
    }
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;

    .headline-wrapper {
      .main-headline-article h2 {
        display: none;
      }

      .main-headline-article .main-headline h2 {
        display: block;
      }
    }

    .secondary-headlines {
      border: none;
    }
  }
`;

export default HeadlinesWrapper;
