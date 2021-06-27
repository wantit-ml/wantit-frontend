import React, { useEffect, useState } from "react";

import {
  chakra,
  Heading,
  Text,
  Divider,
  Box,
  VStack,
  Grid,
  Avatar,
  Center,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import { AboutData, getAbout } from "api/user";

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';

import { Skills } from 'components/organisms/Skills';
import { Languages } from 'components/organisms/Languages';
import { PageTemplate } from 'components/templates/PageTemplate';
import { GetServerSideProps } from "next";

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { padding: '0 50px' },
});

const Row = ({ name, text }: { name: string; text: string }) => {
  return (
    <Text>
      <Text color="gray.500" display="inline" as='span'>
        {name}:
      </Text>{' '}
      {text}
    </Text>
  );
};

const ResumePage = ({ id }: { id: string }): JSX.Element | null => {
  const [resume, setResume] = useState<AboutData | null>(null);

  useHtmlClassname('with-feed-background');

  useEffect(() => {
    (async () => {
      const data = await getAbout(id);
      setResume(data);
    })();
  }, []);

  if (!resume) {
    return null;
  }

  return (
    <StyledPageTemplate>
      <Box position="relative" width="100%">
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
        >
          <Grid
            gridTemplateColumns="repeat(3, 1fr)"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Heading as="h3" size="xl">
                {resume.surname} {resume.name}
              </Heading>

              <Heading as="h4" size="md" mt="5px" mb="10px">
                {resume.rank}
              </Heading>

              <Row name="Пол" text={resume.gender} />
              <Row name="Город" text={resume.city} />
              <Row name="Переезд" text={resume.can_move} />
            </Box>

            <Center flexDirection="column">
              {resume.telegram_id && <Text>{resume.telegram_id}</Text>}

              {resume.vk_id && <Text>{resume.vk_id}</Text>}

              {resume.github_id && <Text>{resume.github_id}</Text>}
            </Center>

            <Center justifyContent="flex-end">
              <Avatar src="https://bit.ly/broken-link" size="2xl" />
            </Center>
          </Grid>

          <Divider />

          <VStack>
            <FormControl>
              <FormLabel>Специализации</FormLabel>
              <Skills skills={resume.stack} readonly />
            </FormControl>

            <FormControl>
              <FormLabel>Образование</FormLabel>
              <Text color="gray.500">{resume.school}</Text>
              <Languages languages={resume.foreign_languages} readonly />
            </FormControl>
          </VStack>
        </VStack>
      </Box>
    </StyledPageTemplate>
  );
};

export const getServerSideProps: GetServerSideProps<{ id: string }, { id: string }> = ({ params: { id } }) => {
  return { props: { id } };
}

export default ResumePage;
