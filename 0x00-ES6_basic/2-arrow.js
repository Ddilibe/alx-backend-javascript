#!/usr/bin/env node

/*
	Script for testing the arrow function
*/

export default function getNeighborHoodsList() {
	this.sanfranciscoNeighborhoods = ['SOMA', "Union Square"];

	const self = this;
	this.addNeighborhood = (newNeighborhood) => {
		self.sanfranciscoNeighborhoods.push(newNeighborhood);
		return self.sanfranciscoNeighborhoods;
	};
}
