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

let host = process.env["WANTIT_BACK"]
if (!host)
	host = "localhost/api"

export const NewUser = async (data: NewUserData) => {
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

export const Login = async (data: LoginData) => {
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