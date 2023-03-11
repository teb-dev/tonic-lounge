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
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #ton-connect-button {
    margin-right: 20px;

    #tc-connect-button {
      display: flex;
      align-items: center;
      padding: 17.5px 16px;
      background: #ffffff;
      border-radius: 12px;
      border: none;
      outline: none;
      cursor: pointer;

      svg {
        height: 16px;
        width: 16px;

        path {
          fill: #2aabee;
        }
      }
      div {
        font-family: 'Pretendard';
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #0595d9;
      }
    }

    #tc-dropdown-button {
      display: flex;
      align-items: center;
      min-width: 180px;
      padding: 17.5px 16px;
      background: #ffffff;
      border-radius: 12px;
      border: none;
      outline: none;
      cursor: pointer;

      svg {
        height: 16px;
        width: 16px;

        path {
          stroke: #2aabee;
        }
      }
      div {
        margin-left: 6px;
        font-family: 'Pretendard';
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #0595d9;
      }
    }
  }
  #tc-wallets-modal-container {
    padding-right: 12px;
    font-family: 'Pretendard';
  }
`;
