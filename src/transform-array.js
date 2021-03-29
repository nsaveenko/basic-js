const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];

  if (!Array.isArray(arr)) {
      throw new Error();
  }

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {
          result.push(arr[i + 1]);
      } else if (arr[i] === '--double-prev') {
          result.push(arr[i - 1]);
      } else if (arr[i] === '--discard-prev') {
          result.pop();
      } else if (arr[i] === '--discard-next') {
          if (arr[i + 2] && arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev') {
              i += 2;
          } else {
              i += 1;
          }
      } else {
        result.push(arr[i]);
      }
  }

  return result.filter(value => value !== undefined);
}
