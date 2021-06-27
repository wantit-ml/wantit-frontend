import { Currency } from './Currency.types';

export type Vacancy = {
  id: number;
  title: string;
  vacancy_code: string;
  code: null;
  description: string;
  stack: string[];
  salary: number;
  currency: Currency;
  city: string;
  address: string;
  type_of_vacancy: string;
  author: string;
  phone: string;
  email: string;
};
