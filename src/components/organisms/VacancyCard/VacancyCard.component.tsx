import React from 'react';

import { VacancyCardProps } from './VacancyCard.interface';
import { chakra, Heading, Link, Text, VStack } from '@chakra-ui/react';

const StyledLink = chakra(Link);

export const VacancyCard = ({ vacancy }: VacancyCardProps): JSX.Element => {
  return (
    <VStack
      border="1px solid black"
      borderRadius="10px"
      padding="20px 40px"
      alignItems="flex-start"
      width="100%"
    >
      <Heading as="h3" size="xl">
        {vacancy.title}
      </Heading>
      <Text>{vacancy.author}</Text>
      <Text>
        {vacancy.city} {vacancy.address}
      </Text>

      <Text>{vacancy.description}</Text>

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
