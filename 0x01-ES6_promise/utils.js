#!/usr/bin/env node

function uploadPhoto() {
	return {
		status: 200.
		body: 'photo-profile-1',
	}
}

function createUser() {
	return {
		firstName: "Guillaume",
		lastName:  "Salva",
	}
}

module.exports {
	uploadPhoto : uploadPhoto,
	createUser: createUser,
}