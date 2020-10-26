const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  const cat = '^^';
  matrix.flat().forEach((element) => {
    if (element === cat) count += 1;
  });
  return count;
};
