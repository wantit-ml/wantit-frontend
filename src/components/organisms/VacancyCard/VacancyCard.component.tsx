import React from 'react';

import { Box, chakra, Heading, Link, Text, VStack } from '@chakra-ui/react';
import MDEditor from '@uiw/react-md-editor';

import { VacancyCardProps } from './VacancyCard.interface';

const StyledLink = chakra(Link);
const StyledMDView = chakra(MDEditor.Markdown, {
  baseStyle: {
    width: '100%',
    maxHeight: '160px',
    overflow: 'hidden',
  },
});

export const VacancyCard = ({ vacancy }: VacancyCardProps): JSX.Element => {
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
        padding="20px 40px"
        height="100%"
        width="100%"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <VStack alignItems="flex-start" width="100%">
          <Heading as="h3" size="xl">
            {vacancy.title}
          </Heading>
          <Text>{vacancy.author}</Text>
          <Text>{vacancy.city}</Text>

          <StyledMDView source={vacancy.description} />
        </VStack>

        <StyledLink
          bg="blue.500"
          _hover={{ textDecoration: 'none' }}
          href={`/vacancy/${vacancy.id}`}
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="5px 24px"
          borderRadius="4px"
          mt="30px"
          alignSelf="flex-end"
        >
          Посмотреть
        </StyledLink>
      </VStack>
    </Box>
  );
};
