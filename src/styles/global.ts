import { css } from '@emotion/react';
import reset from 'emotion-reset';
export const global = css`
  ${reset}
  html {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
  }
  #__next {
    width: 100%;
    height: 100%;
  }
`;
