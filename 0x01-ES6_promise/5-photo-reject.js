#!/usr/bin/env node

/*
	Script that explores the reject part of a promise
*/

export default function uploadPhoto(filename) {
	return Promise.reject( new Error(`${filename} cannot be processed`))
}
