/* eslint no-underscore-dangle: 0 */
class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    this._size = val;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    this._location = val;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

export default HolbertonClass;
