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

export const mockVacancies: Vacancy[] = [
  {
    id: 3,
    title: 'Уборщик',
    vacancy_code: '',
    description: 'Драить унитаз',
    stack: ['Уборка', 'Frontend'],
    salary: 100,
    currency: 'rub',
    city: 'Екатеринбург',
    address: 'Пушкина, 22',
    type_of_vacancy: 'part-time',
    author: 'ООО Развитие',
    phone: '+79123456789',
    email: 'enotik@poloskun.ru',
    code: null,
  },
  {
    id: 4,
    title: 'Frontend разработчик',
    vacancy_code: '',
    description: 'Разрабатывать фронт',
    stack: ['React', 'Frontend'],
    salary: 5000,
    currency: 'rub',
    city: 'Екатеринбург',
    address: 'Пушкина, 22',
    type_of_vacancy: 'part-time',
    author: 'ООО Развитие',
    phone: '+79123456789',
    email: 'enotik@poloskun.ru',
    code: null,
  },
];
