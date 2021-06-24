import React from 'react';

import { Heading, VStack, Text, chakra, Link } from '@chakra-ui/react';

import { EmployeeCardProps } from './EmployeeCard.interface';

const StyledLink = chakra(Link);

export const EmployeeCard = ({ employee }: EmployeeCardProps): JSX.Element => {
  return (
    <VStack
      border="1px solid black"
      borderRadius="10px"
      padding="20px 40px"
      alignItems="flex-start"
      width="100%"
    >
      <Heading as="h3" size="xl">
        {employee.name} {employee.surname}, {employee.age} лет
      </Heading>
      <Text>{employee.gender}</Text>
      <Text>{employee.city}</Text>
      <Text>{employee.can_move}</Text>
      <Text>Специализации: {employee.stack.join(', ')}</Text>
      <Text>{employee.school}</Text>

      <StyledLink
        bg="blue.500"
        _hover={{ textDecoration: 'none' }}
        href="#"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="5px 24px"
        borderRadius="4px"
        mt="30px"
      >
        Посмотреть
      </StyledLink>
    </VStack>
  );
};
