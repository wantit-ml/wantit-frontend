import React from 'react';

import { VStack } from '@chakra-ui/react';

import { PageTemplateProps } from './PageTemplate.interface';

export const PageTemplate = ({
  children,
  className,
}: PageTemplateProps): JSX.Element => {
  return (
    <VStack mt="calc(75px + 75px)" height="100%" className={className}>
      {children}
    </VStack>
  );
};
