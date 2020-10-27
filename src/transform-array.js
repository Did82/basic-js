const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!(arr instanceof Array)) throw new Error();

  let transArr = [];
  let resultArr = [];

  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        transArr.push('--deleted');
        i += 1;
        break;
      case '--discard-prev':
        transArr.pop();
        transArr.push('--deleted');
        break;
      case '--double-next':
        if(i + 1 < arr.length)
          transArr.push(arr[i + 1])
        break;
      case '--double-prev':
        if(i - 1 >= 0)
          transArr.push(transArr[transArr.length - 1]);
        break;
      default:
        transArr.push(arr[i]);
    }
  }

  for (const item of transArr) {
    if (item !== '--deleted') resultArr.push(item);
  }

  return resultArr;
};
