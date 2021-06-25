export type NewUserProps = {
	username: string,
	email: string,
	phone: string,
	role: string,
}

let host = process.env["WANTIT_BACK"]
if (!host)
	host = "localhost/api"

export const NewUser = async (data: NewUserProps) => {
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