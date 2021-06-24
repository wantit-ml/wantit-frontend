import { Currency } from 'types/Currency.types';

export type SalaryProps = {
  label: string;

  from: number;
  setFrom: (f: number) => void;

  to: number;
  setTo: (f: number) => void;

  currency: Currency;
  setCurrency: (c: Currency) => void;
};
