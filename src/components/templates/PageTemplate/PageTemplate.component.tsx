import React from 'react';

import { Box, Heading, VStack } from '@chakra-ui/react';

import { PageTemplateProps } from './PageTemplate.interface';

export const PageTemplate = ({
  children,
  title,
}: PageTemplateProps): JSX.Element => {
  return (
    <VStack mt="calc(75px + 125px)" height="100%">
      {title && (
        <Box maxW="3xl" w="100%" mb="25px">
          <Heading as="h2" size="2xl">
            {title}
          </Heading>
        </Box>
      )}

      {children}
    </VStack>
  );
};
