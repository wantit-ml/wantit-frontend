import { host } from './settings';
import { VacancyDataWithId } from "./vacancy";
import { AboutData } from "./user";

export const getMatchingUsers = async (): Promise<AboutData[]> => {
  const response = await fetch(
    `${host}/matching/get_matching_users_for_all_vacancies`,
    {
      credentials: 'include'
    }
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error('NotFound');
};

export const getMatchingVacancies = async (
  identifier: string | number
): Promise<VacancyDataWithId[]> => {
  const response = await fetch(
    `${host}/matching/get_matching_vacancies?user_identifier=${identifier}`
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error('NotFound');
};
