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
    * {
      font-family: Unbounded 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
        system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
        'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }
  }
`;
