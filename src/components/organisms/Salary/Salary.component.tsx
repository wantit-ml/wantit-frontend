import React from 'react';

import {
  FormControl,
  FormLabel,
  HStack,
  NumberInput,
  NumberInputField,
  Select,
} from '@chakra-ui/react';

import { Currency } from 'types/Currency.types';

import { SalaryProps } from './Salary.interface';

const ONE_MILLION = 1_000_000;

export const Salary = ({
  currency,
  from,
  setCurrency,
  setFrom,
  setTo,
  to,
  label,
}: SalaryProps): JSX.Element => {
  const handleFromChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFrom(Number(e.target.value));
  };

  const handleToChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTo(Number(e.target.value));
  };

  const handleCurrencyChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setCurrency(e.target.value as Currency);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <HStack>
        <NumberInput min={1} max={ONE_MILLION} flex="1" placeholder="от">
          <NumberInputField
            type="number"
            value={from}
            onChange={handleFromChange}
          />
        </NumberInput>

        <NumberInput min={1} max={ONE_MILLION} flex="1" placeholder="до">
          <NumberInputField
            type="number"
            value={to}
            onChange={handleToChange}
          />
        </NumberInput>

        <Select
          variant="rub"
          value={currency}
          onChange={handleCurrencyChange}
          flex="1"
          bgColor="white"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="inherit"
        >
          <option value="rub">руб.</option>
          <option value="usd">долларов</option>
          <option value="eur">евро</option>
        </Select>
      </HStack>
    </FormControl>
  );
};
