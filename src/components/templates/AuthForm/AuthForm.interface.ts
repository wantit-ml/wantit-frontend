import React from 'react';

export type AuthFormProps = {
  label: string;
  children: React.ReactNode;

  changeAuthMethodText: string;
  changeAuthMethodLink: string;

  changeRoleText: string;
  changeRoleLink: string;

  onSubmit: () => void;
};
