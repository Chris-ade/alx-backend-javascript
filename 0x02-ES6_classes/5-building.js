/* eslint no-underscore-dangle: 0 */
function Building(sqft) {
  if (new.target === Building) {
    throw new Error('Cannot instantiate abstract class Building directly');
  }
  if (typeof sqft !== 'number') {
    throw new Error('sqft must be a number');
  }
  this._sqft = sqft;
}

Object.defineProperty(Building.prototype, 'sqft', {
  get() {
    return this._sqft;
  },
});

Building.prototype.evacuationWarningMessage = function () {
  throw new Error('Class extending Building must override evacuationWarningMessage');
};

export default Building;
