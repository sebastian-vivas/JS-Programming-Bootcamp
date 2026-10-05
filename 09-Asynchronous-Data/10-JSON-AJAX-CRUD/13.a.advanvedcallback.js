function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  let result = [];

  forEach(array, function (item, index, array) {
    result.push(callback(item));
  });
  return result;
}

function multiplyBy2(item) {
  return item * 2;
}

map([1, 2, 3], multiplyBy2);

function filter(array, callback) {
  let result = [];
  forEach(array, function (item) {
    if (callback(item)) {
      result.push(item);
    }
  });
  return result;
}

function lessThan5(item) {
  return item <= 5;
}

filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], lessThan5);
