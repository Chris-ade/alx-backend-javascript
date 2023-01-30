export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }
  let updatedMap = new Map();
  for (let [name, quantity] of map) {
    if (quantity === 1) {
      updatedMap.set(name, 100);
    } else {
      updatedMap.set(name, quantity);
    }
  }
  return updatedMap;
}
