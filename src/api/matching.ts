import { host } from './settings';

export const getMatchingUsers = async (
  identifier: number
): Promise<number[]> => {
  const response = await fetch(
    `${host}/vacancy/get_matching_users?vacancy_id=${identifier}`
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error('NotFound');
};

export const getMatchingVacancies = async (
  identifier: string | number
): Promise<number[]> => {
  const response = await fetch(
    `${host}/get_matching_vacancies?user_identifier=${identifier}`
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error('NotFound');
};
