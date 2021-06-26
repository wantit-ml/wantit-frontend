import { host } from './settings';

export type VacancyData = {
  user_identifier: number | string;
  title: string;
  vacancy_code: string;
  description: string;
  stack: string[];
  foreign_languages: string[];
  salary: number;
  currency: string;
  city: string;
  address: string;
  type_of_vacancy: string;
  author: string;
  phone: string;
  email: string;
};

export const createVacancy = async (data: VacancyData): Promise<string> => {
  const response = await fetch(`${host}/vacancy/create_vacancy_db`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (response.ok) {
    return 'ok';
  }

  return response.text();
};

export const getVacancyByUserId = async (
  identifier: string | number
): Promise<VacancyData> => {
  const response = await fetch(
    `${host}/vacancy/get_by_user_id?user_identifier=${identifier}`
  );

  if (response.ok) return response.json();

  throw new Error('NotFound');
};

export const getVacancyById = async (
  identifier: number
): Promise<VacancyData> => {
  const response = await fetch(
    `${host}/vacancy/get_by_id?vacancy_id=${identifier}`
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error('NotFound');
};
