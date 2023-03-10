export default class HolbertonCourse {
	constructor (name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}

	set name(nam) {
		if (typeof nam !== 'string') {
			throw new TypeError("Name must be a string");
		}
		this._name = nam;
	}

	set length(length) {
		if (typeof length !=='number') {
			throw new TypeError("Length must be a number");
		}
		this._length = length;
	}

	set students(students) {
		if ( students instanceof Array) {
			throw new TypeError("Students must be an array")
		}
		if (students.every((value) => {
			typeof value !== String;
		})) {
			throw new TypeError("Students must be an array of strings");
		}
		this._students = students;
	}

	get name() {
		return this._name;
	}

	get length() {
		return this._length;
	}

	get students() {
		return this._students;
	}
}