import { host } from './settings';

import {Languages} from 'types/Language.types';

export type CreateUserData = {
  username: string;
  email: string;
  password: string;
  phone: string;
  role: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  phone: string;
  role: string;
}

export type LoginData = {
  username: string;
  password: string;
  role: string;
};

export type Timetable = {
  day: string;
  time: string;
};

export type Achievement = {
  type: string;
  title: string;
  level: string;
  role: string;
  description: string;
};

export type AboutData = {
  id: string | number;
  name: string;
  surname: string;
  city: string;
  birthday: string;
  gender: string;
  citizenships: string[];
  description: string;
  rank: string;
  salary: number;
  currency: string;
  stack: string[];
  school: string;
  age: number;
  native_language: string;
  foreign_languages: Languages[];
  can_move: string;
  metro_station: string;
  github_id: string;
  vk_id: string;
  telegram_id: string;
  timetable: Timetable[];
  achievements: Achievement[];
};

export const createUser = async (data: CreateUserData): Promise<string> => {
  const response = await fetch(`${host}/auth/registration`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (response.ok) {
    return 'ok';
  }

  throw new Error(await response.text());
};

export const login = async (data: LoginData): Promise<User> => {
  const response = await fetch(`${host}/auth/login`, {
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(await response.text());
};

export const logout = async () => {
  await fetch(`${host}/auth/logout`, {
    credentials: 'include',
    method: 'GET',
  });
}

export const getMe = async (): Promise<User> => {
  const response = await fetch(`${host}/user/get_user`, {
    credentials: 'include',
    method: 'GET'
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(await response.text());
}

export const fillAbout = async (data: AboutData): Promise<string> => {
  const response = await fetch(`${host}/user/fill_about`, {
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (response.ok) {
    return 'ok';
  }

  throw new Error(await response.text());
};

export const getAbout = async (
  identifier: string | number
): Promise<AboutData> => {
  const response = await fetch(
    `${host}/user/get_about?identifier=${identifier}`,
    {
      credentials: 'include'
    }
  );

  if (response.ok) {
    return response.json();
  }

  throw new Error(await response.text());
};
