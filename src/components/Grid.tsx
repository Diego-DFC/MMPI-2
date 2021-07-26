import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {breakpoints} from "../hooks/media";

export const Grid = styled.div<
  {
    container?: boolean;
    item?: boolean;
  } & keyof Partial<typeof breakpoints>
>`
  ${(p) =>
    p.container &&
    css`
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    `}

  ${(p) =>
    p.item &&
    Object.keys(breakpoints)
      .filter((size) => size in p)
      .map(
        (size) =>
          css`
            @media (min-width: ${breakpoints[
                size as keyof typeof breakpoints
              ]}px) {
              display: ${p[size as keyof typeof p] === 0 ? "none" : "block"};
              grid-column: span ${p[size as keyof typeof p]};
            }
          `
      )}
`;
