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
      paddingLeft="45px"
      paddingRight="45px"
    >
      <Flex>{leftChildren}</Flex>

      {rightChildren && <Flex alignItems="center">{rightChildren}</Flex>}
    </chakra.header>
  );
};
