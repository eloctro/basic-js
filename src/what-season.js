const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  console.log(date);

  try {
    date.getTime();
  } catch (error) {
    throw new Error("Invalid date!");
  }

  // if (typeof date === "string") {
  //   return "Invalid date!";
  // }

  let season = "";
  let time = date.getMonth();

  // console.log(typeof date);
  // console.log(date.getMonth());
  // console.log(time);
  if ((time >= 0 && time <= 1) || time == 11) {
    season += "winter";
  } else if (time >= 2 && time <= 4) {
    season += "spring";
  } else if (time >= 5 && time <= 7) {
    season += "summer";
  } else if (time >= 8 && time <= 10) {
    season += "autumn";
  }
  // console.log(season);
  return season;
}

module.exports = {
  getSeason,
};

console.log(getSeason(new Date(1812, 8, 9, 10, 11, 12)));
console.log(getSeason(new Date(1908, 5, 31, 1, 20, 13, 297)));
