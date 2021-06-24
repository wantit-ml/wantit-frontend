import React from 'react';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { Header } from 'components/organisms/Header';

import 'styles/globals.css';
import 'prosemirror-view/style/prosemirror.css';
import 'prosemirror-example-setup/style/style.css';
import 'prosemirror-gapcursor/style/gapcursor.css';
import 'prosemirror-menu/style/menu.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
