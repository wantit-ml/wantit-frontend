import { Currency } from 'types/Currency.types';

export type SalaryProps = {
  label: string;

  value: number;
  setValue: (f: number) => void;

  currency: Currency;
  setCurrency: (c: Currency) => void;
};
