import React from 'react';

import { chakra, Grid } from '@chakra-ui/react';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';

import { mockEmployees } from 'types/Employee.types';

import { EmployeeCard } from 'components/organisms/EmployeeCard';
import { PageTemplate } from 'components/templates/PageTemplate';

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { padding: '0 50px', alignItems: 'flex-start' },
});

const VacanciesPage = (): JSX.Element => {
  useHtmlClassname('with-feed-background');

  return (
    <StyledPageTemplate>
      <Grid
        gap="50px"
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gridAutoFlow="row"
        width="100%"
      >
        {mockEmployees.map((employee) => (
          <EmployeeCard employee={employee} key={employee.user_id} />
        ))}
      </Grid>
    </StyledPageTemplate>
  );
};

export default VacanciesPage;
