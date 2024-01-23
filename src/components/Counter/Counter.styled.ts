import styled from "styled-components";

import { alignItemsCenter, flexSpBetween, rem } from "@styles/Utilities.styled";


export const StyledCounter = styled.div`
  height: 100vh;

  nav {
    ${flexSpBetween}
    padding: 1rem;
    margin-top: 2rem;
    border: 1px solid var(--clr-gray-400);
    border-radius: var(--border-radius-3);

    .links-wrapper {
      ${alignItemsCenter}
      gap: 1rem;

      a {
        text-decoration: underline;
        font-size: ${rem(15)};
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-top: 10rem;
  }

  .body {
    ${alignItemsCenter}
    gap: 1rem;

    button {
      padding: 0.7rem 1.25rem;
      font-size: ${rem(14)};
      border: 1px solid black;
      border-radius: 5px;
    }
  }
`;
