#!/usr/bin/env node

/*
	Script that contatenates 2 arrays and each character of a string.
*/

export default function concatArrays(array1, array2, string) {
	return [...array1, ...array2, ...string];
}