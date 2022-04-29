const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
console.log(typeof sampleActivity);

  if (
    sampleActivity < 1 ||
    sampleActivity > MODERN_ACTIVITY ||
    typeof sampleActivity !== "string"
  ) {
    return false;
  }
  let answer = Math.ceil(
    Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
      (Math.LN2 / HALF_LIFE_PERIOD)
  );

  if (answer > 0 && typeof answer === "number" && answer !== Infinity) {
    return answer;
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
