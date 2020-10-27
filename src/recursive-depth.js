const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        let tempDepth = this.calculateDepth(arr[i]);
        if (tempDepth > depth) depth = tempDepth;
      }
    }
    return depth + 1;
  };
};