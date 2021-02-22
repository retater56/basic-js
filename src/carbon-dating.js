const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity != "string") {
    return false;
  }

  sampleActivity= Number.parseFloat(sampleActivity);

  if (sampleActivity <= 0 || sampleActivity == NaN) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;

  let ln = Math.log(MODERN_ACTIVITY / sampleActivity);

  if (ln < 0) {
    return false;
  }

  let t = ln / k;
  
  return Math.ceil(t);
};