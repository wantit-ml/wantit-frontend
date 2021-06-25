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
  value,
  setCurrency,
  setValue,
  label,
}: SalaryProps): JSX.Element => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(Number(e.target.value));
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
            value={value}
            onChange={handleChange}
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
