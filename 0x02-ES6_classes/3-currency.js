export default class Currency {
	constructor (code, name) {
		this._name = name;
		this._code = code;
	}

	set name(name) {
		if (typeof name !== "string") {
			throw new TypeError("Name must be a String");
		}
		this._name = name;
	}

	set code(code) {
		if (typeof code !== "string") {
			throw new TypeError("Code must be a string");
		}
		this._code = code;
	}

	get name() {
		return this._name;
	}

	get code() {
		return this._code;
	}

	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}