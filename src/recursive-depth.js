const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, currentDepth = 1) {
    let result = currentDepth;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let subDepth = this.calculateDepth(arr[i], currentDepth + 1);
        
        if (subDepth > result) {
            result = subDepth;
        }
      }
    }
    return result;
  }
};