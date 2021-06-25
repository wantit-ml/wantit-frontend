export type CompanyData = {
	user_identifier: number,
	title: string,
	phone: string,
	email: string,
	description: string,
	city: string,
	address: string,
}

let host = process.env["WANTIT_BACK"]
if (!host)
	host = "localhost/api"

export const newCompany = async (data: CompanyData): Promise<string> => {
	const response = await fetch(
		host + "/company/create",
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

export const getCompanyByUserId = async (identifier: string | number): Promise<CompanyData> => {
	let id: string;
	if (typeof identifier === "number") {
		id = identifier.toString()
	}
	else {
		id = identifier
	}
	const response = await fetch(host + "/company/get_by_user" + "?user_identifier=" + id)
	if (response.ok) {
		return await response.json()
	}
	else {
		throw "NotFound"
	}
}

export const getCompanyById = async (identifier: number): Promise<CompanyData> => {
	const company_id = identifier.toString()

	const response = await fetch(host + "/company/get_by_id" + "?company_id=" + company_id)
	if (response.ok) {
		return await response.json()
	}
	else {
		throw "NotFound"
	}
}