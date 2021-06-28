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
