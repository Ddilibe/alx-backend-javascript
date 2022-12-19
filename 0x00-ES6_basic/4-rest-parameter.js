#!/usr/bin/env node

/*
	Script that explores the abilities of the rest parameters
*/

export default function returnHowManyArguments(...j) {
	let length = 0
	for (const arg of j) {
		length += 1;
	}
	return (length);
};