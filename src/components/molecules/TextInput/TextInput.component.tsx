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
  labelColor,
  bgColor,
  color,
  type,
}: TextInputProps): JSX.Element => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e);
    setValue?.(e.target.value);
  };

  return (
    <FormControl className={className}>
      <FormLabel color={labelColor}>{label}</FormLabel>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        color={color}
        bgColor={bgColor}
      />

      {error && <FormHelperText color="red.500">{error}</FormHelperText>}
    </FormControl>
  );
};
