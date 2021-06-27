import { Currency } from './Currency.types';
import { Languages } from './Language.types';

export type Employee = {
  user_id: number;
  name: string;
  surname: string;
  city: string;
  birthday: string;
  gender: string;
  citizenships: string[];
  rank: string;
  salary: number;
  currency: Currency;
  stack: string[];
  school: string;
  age: number;
  native_language: Languages;
  foreign_languages: Languages[];
  can_move: string;
  metro_station: string;
  github_id: string;
  vk_id: string;
  telegram_id: string;
};

export const mockEmployee = (): Employee => ({
  user_id: Math.random(),
  name: 'Максим',
  surname: 'Умутаев',
  city: 'Среднеуральск',
  birthday: 'Wed,08 Sep 2004 06:00:00',
  gender: 'male',
  citizenships: ['ru'],
  rank: 'Backend developer',
  salary: 300000,
  currency: 'rub',
  stack: ['Python', 'FastAPI', 'WEB'],
  school: 'СУНЦ УрФУ',
  age: 16,
  native_language: 'ru',
  foreign_languages: ['en'],
  can_move: 'no',
  metro_station: '',
  github_id: 'umutaev',
  vk_id: 'm0x1im',
  telegram_id: 'NotHimNotAtAll',
});

export const mockEmployees: Employee[] = [
  mockEmployee(),
  mockEmployee(),
  mockEmployee(),
  mockEmployee(),
  mockEmployee(),
  mockEmployee(),
  mockEmployee(),
];
