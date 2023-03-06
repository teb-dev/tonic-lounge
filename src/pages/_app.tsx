import { Global, ThemeProvider } from '@emotion/react';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import type { AppProps } from 'next/app';

import { getApiEndpoint } from '../constants/env/env';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <TonConnectUIProvider manifestUrl={`https://${getApiEndpoint()}/tonconnect-manifest.json`}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </TonConnectUIProvider>
    </>
  );
}

export default MyApp;
