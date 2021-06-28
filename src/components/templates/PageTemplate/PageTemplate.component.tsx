import React from 'react';

import { VStack, Box, Heading } from '@chakra-ui/react';

import { PageTemplateProps } from './PageTemplate.interface';

export const PageTemplate = ({
  children,
  className,
  title,
}: PageTemplateProps): JSX.Element => {
  return (
    <VStack
      mt={{ lg: 'calc(75px + 75px)', base: '75px' }}
      height="100%"
      className={className}
    >
      {title && (
        <Box maxW="3xl" w="100%" mb="25px">
          <Heading as="h2" size="2xl" pl={{ base: '15px', lg: '0' }}>
            {title}
          </Heading>
        </Box>
      )}

      {children}
    </VStack>
  );
};
