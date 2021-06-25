export type NewUserData = {
	username: string,
	email: string,
	phone: string,
	role: string,
}

export type LoginData = {
	username: string,
	password: string,
}
/*
{
  "identifier": 1,
  "name": "string",
  "surname": "string",
  "city": "string",
  "birthday": "2021-06-24T11:10:19.842Z",
  "gender": "string",
  "citizenships": [
    "string"
  ],
  "rank": "string",
  "salary": 0,
  "currency": "string",
  "stack": [
    "string"
  ],
  "school": "string",
  "age": 0,
  "native_language": "string",
  "foreign_languages": [
    "string"
  ],
  "can_move": "string",
  "metro_station": "string",
  "github_id": "string",
  "vk_id": "string",
  "telegram_id": "string",
  "timetable": [
    {
        "day": "day",
        "time": "time"
    }
  ],
  "achievements": [
    {
        "type": "Type",
		"title": "Title",
		"level": "Level",
		"role": "Role",
		"file": "File",
		"description": "Description"
    }
  ]
}

*/

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

export type FillAboutData = {
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

let host = process.env["WANTIT_BACK"]
if (!host)
	host = "localhost/api"

export const newUser = async (data: NewUserData) => {
	const response = await fetch(
		host + "/auth/registration",
		{
			body: JSON.stringify(data),	
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		},
	)
	if(response.ok){
		return "ok";
	}
	else{
		return(response.text())
	}
}

export const login = async (data: LoginData) => {
	const response = await fetch(
		host + "/auth/get_session",
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
	else {
		return (response.text())
	}
}

export const fillAbout = async (data: FillAboutData) => {
	const response = await fetch(
		host + "/user/fill_about",
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
	else {
		return (response.text())
	}
}