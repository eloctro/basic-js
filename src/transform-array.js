const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];
  let flagPopNext = false;
  let del = 0;
  arr.forEach((elem, ind, arr) => {
    newArr.push(elem);
    if (elem === "--discard-next") {
      newArr.pop();
      flagPopNext = true;
      ``;
    } else if (elem === "--discard-prev") {
      if (arr[ind - 2] !== "--discard-next") {
        newArr.pop();
      }
      newArr.pop();
    } else if (elem === "--double-next") {
      newArr.pop();
      if (arr[ind + 1] != undefined) {
        newArr.push(arr[ind + 1]);
      }
    } else if (elem === "--double-prev") {
      newArr.pop();
      if (arr[ind - 2] !== "--discard-next") {
        if (arr[ind - 1] != undefined) {
          newArr.push(newArr[newArr.length - 1]);
        }
      }
    } else {
      if (flagPopNext) {
        newArr.pop();
        flagPopNext = false;
      }
    }
  });

  // console.log(newArr);
  return newArr;
}

module.exports = {
  transform,
};

console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])
);
