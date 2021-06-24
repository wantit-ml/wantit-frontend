import React from 'react';

export type TextInputTypes = 'text' | 'password';

export type TextInputProps = {
  label: string;
  labelColor?: string;

  color?: string;
  bgColor?: string;

  placeholder: string;

  value?: string;
  setValue?: (v: string) => void;
  onChange?: React.ChangeEventHandler;

  name?: string;
  className?: string;
  error?: string;

  type?: TextInputTypes;
};
