import React from 'react';

import { Box, Heading, VStack } from '@chakra-ui/react';

import { FormSectionProps } from './FormSection.interface';

export const FormSection = ({
  children,
  label,
}: FormSectionProps): JSX.Element => {
  return (
    <Box
      w="100%"
      borderLeftWidth="5px"
      borderLeftColor="green.300"
      borderLeftStyle="solid"
    >
      <Heading color="cyan.900" as="h3" size="lg" lineHeight="1" pl="5px">
        {label}
      </Heading>
      <VStack spacing="25px" pr="40px" pt="20px" pl="15px">
        {children}
      </VStack>
    </Box>
  );
};
