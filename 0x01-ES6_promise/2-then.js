#!/usr/bin/env node

function handleResponseFromAPI(promise) {
	if (promise) {
		return {
			status: 200,
			body: succes
		}
	} else {
		return (new Error());
	}
	console.log("Got a response from the API")
}

module.exports = {
	handleResponseFromAPI: handleResponseFromAPI,
}