import React from 'react';

export type TextInputTypes = 'email' | 'text' | 'password';

export type TextInputProps = {
  label: string;
  labelColor?: string;
  placeholder: string;

  id: string;

  color?: string;
  bgColor?: string;

  value?: string;
  setValue?: (v: string) => void;
  onChange?: React.ChangeEventHandler;

  name?: string;
  className?: string;
  error?: string;

  type?: TextInputTypes;
};
