export interface Student {
	firstName : string;
	lastName : string;
	age : number;
	location : string;
}

const first: Student = {
	firstName: "Micheal",
	lastName: "Eze",
	age: 12,
	location: "Anambra"
};
const second: Student = {
	firstName: "Ebuka",
	lastName: "Nwosu",
	age : 21,
	location: "Ebonyi",
};

const newArray: Array<Student> = [first, second];

export default function generateTable(newArrays: Array<Student>) : void {
	let table = document.querySelector("table");
	let thead = table.createTHead();
	let row1 = thead.insertRow();
	let th1 = document.createElement("th");
	let th2 = document.createElement("th");
	let texta = document.createTextNode("First Name");
	let textb = document.createTextNode("Location");
	th1.appendChild(texta);
	th2.appendChild(textb);
	row1.appendChild(th1);
	row1.appendChild(th2);
	for (const element of newArrays){
		let row = table.insertRow();
		let cell = row.insertCell();
		let firstName = document.createTextNode(element.firstName);
		cell.appendChild(firstName);
		let cell2 = row.insertCell();
		let location = document.createTextNode(element.location);
		cell2.appendChild(location);
	}
}

generateTable(newArray);
