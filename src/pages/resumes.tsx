import React from 'react';

import { chakra } from '@chakra-ui/react';

import { EmployeeCard } from 'components/organisms/EmployeeCard';
import { PageTemplate } from 'components/templates/PageTemplate';

import { mockEmployee } from 'types/Employee.types';

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { alignItems: 'flex-start', padding: '0 50px' },
});

const VacanciesPage = (): JSX.Element => {
  return (
    <StyledPageTemplate title="Соискатели">
      {[mockEmployee].map((employee) => (
        <EmployeeCard employee={employee} key={employee.user_id} />
      ))}
    </StyledPageTemplate>
  );
};

export default VacanciesPage;
