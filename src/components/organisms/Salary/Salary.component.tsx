import React, { forwardRef } from 'react';

import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  NumberInput,
  NumberInputField,
  Select,
} from '@chakra-ui/react';

import { Currency } from 'types/Currency.types';

import { SalaryProps } from './Salary.interface';

const ONE_MILLION = 1_000_000;

export const Salary = forwardRef<HTMLInputElement, SalaryProps>(
  (
    { currency, setCurrency, label, setValue, value, error },
    ref
  ): JSX.Element => {
    const handleCurrencyChange: React.ChangeEventHandler<HTMLSelectElement> = (
      e
    ) => {
      setCurrency(e.target.value as Currency);
    };

    return (
      <FormControl>
        <FormLabel id="salary-label" htmlFor="salary">
          {label}
        </FormLabel>

        <HStack>
          <NumberInput
            flex="3"
            ref={ref}
            min={1}
            max={ONE_MILLION}
            onChange={setValue}
            value={value}
          >
            <NumberInputField placeholder="от" id="salary" type="number" />
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
            id="currency"
          >
            <option value="rub">руб.</option>
            <option value="usd">долларов</option>
            <option value="eur">евро</option>
          </Select>
        </HStack>

        {error && <FormHelperText color="red.500">{error}</FormHelperText>}
      </FormControl>
    );
  }
);
