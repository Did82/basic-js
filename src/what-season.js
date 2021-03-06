const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  if (date instanceof Date && Object.getOwnPropertyNames(date).length === 0) {
    const month = date.getMonth();
    if (month === 11 || month <= 1) return "winter";
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    else return "autumn";
  } else {
    throw new Error();
  }
};
