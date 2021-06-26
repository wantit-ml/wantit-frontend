import React, { forwardRef } from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

import { TextInputProps, TextInputTypes } from './TextInput.interface';

const mapTextInputTypeToAutocomplete: Record<TextInputTypes, string> = {
  text: 'none',
  email: 'email',
  password: 'current-password',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
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
      type = 'text',
      id,
    },
    ref
  ): JSX.Element => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      onChange?.(e);
      setValue?.(e.target.value);
    };

    return (
      <FormControl className={className}>
        <FormLabel id={id + '-label'} htmlFor={id} color={labelColor}>
          {label}
        </FormLabel>
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          color={color}
          bgColor={bgColor}
          ref={ref}
          autoComplete={mapTextInputTypeToAutocomplete[type]}
        />

        {error && <FormHelperText color="red.500">{error}</FormHelperText>}
      </FormControl>
    );
  }
);
