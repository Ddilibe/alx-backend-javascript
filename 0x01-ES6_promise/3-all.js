#!/usr/bin/env node


function handleProfileSignup() {
	const utils = require("./utils");
	let photo = utils.uploadPhoto;
	let user = utils.createUser;
	Promise.any([photo(), user()]).then((value) => {console.log(value)});
	.catch(() => console.log("Signup system o"))
}

module.exports = {
	handleProfileSignup: handleProfileSignup
}