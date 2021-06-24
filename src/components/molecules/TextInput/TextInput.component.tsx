import React from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';
import { TextInputProps } from './TextInput.interface';

export const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  setValue,
  className,
  name,
  error,
}: TextInputProps): JSX.Element => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e);
    setValue?.(e.target.value);
  };

  return (
    <FormControl className={className}>
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />

      {error && <FormHelperText color="red.500">{error}</FormHelperText>}
    </FormControl>
  );
};
