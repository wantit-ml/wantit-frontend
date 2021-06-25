let host = process.env["WANTIT_BACK"]
if (!host)
	host = "localhost/api"

export const getMatchingUsers = async (identifier: number) => {
	const id = identifier.toString()
	const response = await fetch(host + "/vacancy/get_matching_users" + "?vacancy_id=" + id)
	if (response.ok) {
		return await response.json()
	}
	else {
		throw "NotFound"
	}
}

export const getMatchingVacancies = async (identifier: string | number) => {
	let id: string;
	if (typeof identifier === "number") {
		id = identifier.toString()
	}
	else {
		id = identifier
	}
	const response = await fetch(host + "get_matching_vacancies" + "?user_identifier=" + id)
	if (response.ok) {
		return await response.json()
	}
	else {
		throw "NotFound"
	}
}
