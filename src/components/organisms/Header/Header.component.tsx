import React from 'react';

import { chakra, Flex } from '@chakra-ui/react';

import { HeaderProps } from './Header.interface';

export const Header = ({
  bgColor,
  leftChildren,
  rightChildren,
}: HeaderProps): JSX.Element => {
  return (
    <chakra.header
      zIndex="15"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bgColor={bgColor}
      p="12px"
      paddingLeft={{ base: '15px', lg: '45px' }}
      paddingRight={{ base: '15px', lg: '45px' }}
      mt="0 !important"
      className="header"
    >
      <Flex>{leftChildren}</Flex>

      {rightChildren && <Flex alignItems="center">{rightChildren}</Flex>}
    </chakra.header>
  );
};
