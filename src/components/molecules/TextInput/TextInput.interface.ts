import React from 'react';

export type TextInputProps = {
  label: string;
  placeholder: string;

  value?: string;
  setValue?: (v: string) => void;
  onChange?: React.ChangeEventHandler;

  name?: string;
  className?: string;
  error?: string;
};
