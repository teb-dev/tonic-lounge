import { Global, ThemeProvider } from '@emotion/react';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import type { AppProps } from 'next/app';

import { getApiEndpoint } from '../constants/env/env';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <>
      <Global styles={global} />
      <TonConnectUIProvider
        manifestUrl={
          'https://teb-static-assets.s3.ap-northeast-2.amazonaws.com/tonconnect-manifest.json'
        }
      >
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </TonConnectUIProvider>
    </>
  );
}

export default MyApp;
