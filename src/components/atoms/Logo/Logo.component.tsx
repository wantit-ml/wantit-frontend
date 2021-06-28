import React from 'react';

import { Box } from '@chakra-ui/react';

export const Logo = (): JSX.Element => {
  return (
    <Box
      className="logo"
      height={{ base: '40px', lg: '60px' }}
      width={{ base: '40px', lg: '60px' }}
      aria-label="WantIt logo"
    />
  );
};
