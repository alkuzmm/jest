function map(array, callback) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    result.push(callback(array[index]));
  }
  return result;
}

module.exports = { map };
