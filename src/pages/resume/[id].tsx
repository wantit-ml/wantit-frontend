import React from 'react';

import { chakra, Heading, Text, Divider } from '@chakra-ui/react';

import { Employee, mockEmployee } from 'types/Employee.types';

import { PageTemplate } from 'components/templates/PageTemplate';

type ResumePageProps = {
  resume: Employee;
};

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { alignItems: 'flex-start', padding: '0 50px' },
});

const ResumePage = ({ resume }: ResumePageProps): JSX.Element => {
  return (
    <StyledPageTemplate>
      <Heading as="h3" size="xl">
        {resume.surname} {resume.name},
      </Heading>

      <Heading as="h4" size="md" mt="5px">
        {resume.rank}
      </Heading>

      <Text>{resume.gender}</Text>
      <Text>{resume.city}</Text>
      <Text>{resume.can_move}</Text>

      {resume.telegram_id && <Text>{resume.telegram_id}</Text>}

      {resume.vk_id && <Text>{resume.vk_id}</Text>}

      {resume.github_id && <Text>{resume.github_id}</Text>}

      <Divider mt="40px !important" />
    </StyledPageTemplate>
  );
};

export const getServerSideProps = async () => {
  return {
    props: { resume: mockEmployee },
  };
};

export default ResumePage;
