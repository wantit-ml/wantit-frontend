import React from 'react';

import { Heading, VStack, Text, chakra, Link, Box } from '@chakra-ui/react';

import { mapGenderToText, mapMovingToText } from 'util/mapToText.util';
import { Currency, mapCurrencyToText } from 'types/Currency.types';

import { EmployeeCardProps } from './EmployeeCard.interface';

const StyledLink = chakra(Link);

const Row = ({ name, text }: { name: string; text: string }) => {
  return (
    <Text>
      <Text color="gray.500" display="inline" as="span">
        {name}:
      </Text>{' '}
      {text}
    </Text>
  );
};

export const EmployeeCard = ({ employee }: EmployeeCardProps): JSX.Element => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        left="0"
        top="0"
        width="100%"
        height="100%"
        opacity="0.4"
        bg="white"
        zIndex={-1}
        borderRadius="40px"
        filter="drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.25))"
      />

      <VStack
        borderRadius="40px"
        padding="20px 25px"
        alignItems="flex-start"
        width="100%"
      >
        <Heading as="h3" size="md">
          {employee.name} {employee.surname}, {employee.age} лет
        </Heading>

        <Heading as="h4" size="sm" mb="30px !important">
          {employee.rank}, {employee.salary}{' '}
          {mapCurrencyToText[employee.currency as Currency]}
        </Heading>

        <Row
          name="Пол"
          text={mapGenderToText[employee.gender as 'male' | 'female']}
        />

        <Text>
          <Text color="gray.500" display="inline">
            Навыки:
          </Text>{' '}
          {employee.stack.join(', ')}
        </Text>

        <Row name="Образование" text={employee.school} />

        <Box height="30px" />

        <Row name="Город" text={employee.city} />
        <Row
          name="Переезд"
          text={
            mapMovingToText[
              employee.can_move as 'possible' | 'impossible' | 'unwanted'
            ]
          }
        />

        <StyledLink
          bg="blue.500"
          _hover={{ textDecoration: 'none' }}
          href={`/resume/${employee.id}`}
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="5px 24px"
          borderRadius="4px"
          mt="60px !important"
          alignSelf="flex-end"
        >
          Посмотреть
        </StyledLink>
      </VStack>
    </Box>
  );
};
