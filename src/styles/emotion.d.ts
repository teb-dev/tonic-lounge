import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      tonicWhite: string;
      tonicPoint: string;
      tonicBlack: string;
      tonicSecondary: string;
      tonicLogin: string;
      tonicLoginBorder: string;
      tonicGray: string;
      tonicDarkGray: string;
    };
  }
}
