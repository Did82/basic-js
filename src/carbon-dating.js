const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  const sampleNum = parseFloat(sampleActivity);
  // if (!sampleNum) return false;
  if (sampleNum <= 0 || sampleNum > MODERN_ACTIVITY || !sampleNum) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return age;
};
