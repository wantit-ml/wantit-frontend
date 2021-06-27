import { host } from './settings';

export type CompanyData = {
  user_identifier: number;
  title: string;
  phone: string;
  email: string;
  description: string;
  city: string;
  address: string;
};

export const createCompany = async (data: CompanyData): Promise<string> => {
  const response = await fetch(`${host}/company/create`, {
    body: JSON.stringify(data),
    credentials: 'include',
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

export const getCompanyByUserId = async (
  identifier: string | number
): Promise<CompanyData> => {
  const response = await fetch(
    `${host}/company/get_by_user?user_identifier=${identifier}`,
    {
      credentials: 'include',
    }
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error('NotFound');
};

export const getCompanyById = async (
  identifier: number
): Promise<CompanyData> => {
  const response = await fetch(
    `${host}/company/get_by_id?company_id=${identifier}`
  );
  if (response.ok) {
    return response.json();
  }

  throw new Error('NotFound');
};
