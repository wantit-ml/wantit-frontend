import {host} from "./settings";

export type UserData = {
	username: string,
	email: string,
	phone: string,
	role: string,
}

export type LoginData = {
	username: string,
	password: string,
}

export type Timetable = {
	day: string,
	time: string,
}

export type Achievement = {
	type: string,
	title: string,
	level: string,
	role: string,
	// file: string,
	description: string,
}

export type AboutData = {
	identifier: string | number,
	name: string,
	surname: string,
	city: string,
	birthday: string,
	gender: string,
	citizenships: string[],
	rank: string,
	salary: number,
	currency: string,
	stack: string[],
	school: string,
	age: number,
	native_language: string,
	foreign_languages: string[],
	can_move: string,
	metro_station: string,
	github_id: string,
	vk_id: string,
	telegram_id: string,
	timetable: Timetable[],
	achievements: Achievement[],
}

export const newUser = async (data: UserData): Promise<string> => {
	const response = await fetch(
		`${host}/auth/registration`,
		{
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		},
	)

	if (response.ok){
		return "ok";
	}

	return response.text();
}

export const login = async (data: LoginData): Promise<string> => {
	const response = await fetch(
		`${host}/auth/get_session`,
		{
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		},
	)

	if (response.ok) {
		return "ok";
	}

	return response.text()
}

export const fillAbout = async (data: AboutData): Promise<string> => {
	const response = await fetch(
		`${host}/user/fill_about`,
		{
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		},
	)

	if (response.ok) {
		return "ok";
	}

  return response.text()
}

export const getAbout = async (identifier: string | number): Promise<AboutData> => {
	const response = await fetch(`${host}/user/get_about?identifier=${identifier}`)

	if (response.ok){
		return response.json()
	}

  throw new Error("NotFound");
}
