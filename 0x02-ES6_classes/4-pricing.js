import Currency from "./3-currency.js";

export default class Pricing {
	constructor (amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	set amount(amount) {
		if (typeof amount !== "number") {
			throw new TypeError("Amount must be a number");
		}
		this._amount = amount;
	}

	set currency(currency) {
		if ( currency instanceof Currency) {
			throw new TypeError("Currency must be an instance of the currency class");
		}
		this._currency = currency;
	}

	get currency() {
		return this._currency;
	}

	get amount() {
		return this._amount;
	}

	displayFullPrice() {
		return `${this._amount} ${this._currency.name} (${this._currency.code})`;
	}

	static convertPrice(amount, conversionRate) {
		if (typeof amount !== "number") {
			throw new TypeError("Amount must be a number");
		}
		if (typeof conversionRate !== "number") {
			throw new TypeError("ConversionRate must be a number");
		}
		return amount *conversionRate
	}
}