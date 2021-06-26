import React from 'react';

import { VStack, Box, Heading } from '@chakra-ui/react';

import { PageTemplateProps } from './PageTemplate.interface';

export const PageTemplate = ({
  children,
  className,
  title,
}: PageTemplateProps): JSX.Element => {
  return (
    <VStack mt="calc(75px + 75px)" height="100%" className={className}>
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
