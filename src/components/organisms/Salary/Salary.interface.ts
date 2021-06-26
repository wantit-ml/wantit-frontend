import { Currency } from 'types/Currency.types';

export type SalaryProps = {
  label: string;

  value: string;
  setValue: (v: string) => void;

  currency: Currency;
  setCurrency: (c: Currency) => void;
  error?: string;
};
