import React from 'react';

import { chakra, Link, Avatar } from '@chakra-ui/react';

export const Header = (): JSX.Element => {
  return (
    <chakra.header
      zIndex="5"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bgColor="green.300"
      p="12px"
    >
      <Link color="white">Выйти</Link>
      <Avatar size="md" src="https://bit.ly/kent-c-dodds" ml="5px" />
    </chakra.header>
  );
};
