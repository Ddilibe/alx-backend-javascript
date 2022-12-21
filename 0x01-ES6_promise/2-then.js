#!/usr/bin/env node

export default function handleResponseFromAPI(promise) {
	console.log("Got a response from the API")
	if (promise) {
		return {
			status: 200,
			body: "Success",
		}
	} else {
		return (new Error());
	}
}

