#!/usr/bin/env node

/* Scripts for exploring parameter default */

export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
	if (expansion1989) {
		expansion1989 = 89;
	};
	if (expansion2019) {
		expansion2019 = 19;
	};
	return initialNumber + expansion1989 + expansion2019;
}