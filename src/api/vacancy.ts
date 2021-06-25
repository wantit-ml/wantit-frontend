export type CreateVacancyData  = {
	user_identifier: number | string,
	title: string,
	vacancy_code: string,
	description: string,
	stack: string[],
	foreign_languages: string[],
	salary: number,
	currency: string,
	city: string,
	address: string, 
	type_of_vacancy: string,
	author: string,
	phone: string,
	email: string,
}

let host = process.env["WANTIT_BACK"]
if (!host)
	host = "localhost/api"

export const createVacancy = async (data: CreateVacancyData) => {
	const response = await fetch(
		host + "/vacancy/create_vacancy_db",
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

export const getVacancyByUserId = async (identifier: string | number) => {
	let id: string;
	if (typeof identifier === "number") {
		id = identifier.toString()
	}
	else {
		id = identifier
	}
	const response = await fetch(host + "/vacancy/get_by_user_id" + "?user_identifier=" + id)
	if (response.ok) {
		return await response.json()
	}
	else {
		throw "NotFound"
	}
}

export const getVacancyById = async (identifier: number) => {
	const id = identifier.toString()
	const response = await fetch(host + "/vacancy/get_by_id" + "?vacancy_id=" + id)
	if (response.ok) {
		return await response.json()
	}
	else {
		throw "NotFound"
	}
}