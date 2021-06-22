import React from 'react';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { Header } from 'components/organisms/Header';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
