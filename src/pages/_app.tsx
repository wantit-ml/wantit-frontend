import React from 'react';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import 'styles/globals.css';
import '@uiw/react-md-editor/dist/markdown-editor.css';
import '@uiw/react-markdown-preview/dist/markdown.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
