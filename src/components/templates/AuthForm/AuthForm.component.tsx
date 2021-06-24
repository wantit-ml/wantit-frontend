import React from 'react';

import { Box, VStack, Button, Heading, Link, chakra } from '@chakra-ui/react';

import { AuthFormProps } from './AuthForm.interface';

const StyledLink = chakra(Link, {
  baseStyle: { color: 'white', textDecoration: 'underline' },
});

export const AuthForm = ({
  children,
  label,
  onButtonClick,
  changeAuthMethodLink,
  changeAuthMethodText,
  changeRoleLink,
  changeRoleText,
}: AuthFormProps): JSX.Element => {
  return (
    <Box
      position="relative"
      borderRadius="20px"
      padding="20px 70px"
      width="100%"
      height="100%"
      maxWidth="700px"
    >
      <Box
        position="absolute"
        left="0"
        top="0"
        width="100%"
        height="100%"
        opacity="0.4"
        bg="green.900"
        zIndex={-1}
        borderRadius="20px"
      />

      <VStack width="100%" height="100%" spacing="18px">
        <Heading as="h2" size="xl" color="white">
          {label}
        </Heading>

        {children}

        <VStack>
          <StyledLink href={changeAuthMethodLink}>
            {changeAuthMethodText}
          </StyledLink>
          <StyledLink href={changeRoleLink}>{changeRoleText}</StyledLink>
        </VStack>

        <Button
          onClick={onButtonClick}
          color="white"
          bg="green.300"
          _hover={{ bg: 'green.300' }}
          _active={{ bg: 'green.300' }}
        >
          Продолжить
        </Button>
      </VStack>
    </Box>
  );
};
