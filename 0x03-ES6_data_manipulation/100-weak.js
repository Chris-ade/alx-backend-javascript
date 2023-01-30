const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    let count = weakMap.get(endpoint);
    weakMap.set(endpoint, ++count);
  }

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
};

export { weakMap, queryAPI };
