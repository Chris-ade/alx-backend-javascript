/* eslint no-underscore-dangle: 0 */
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
export { Pricing as default, Pricing }
