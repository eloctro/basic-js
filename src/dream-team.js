const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach((member) => {
    if (typeof member !== "string") {
      return false;
    }

    name.push(
      member
        .split("")
        .find((elem) => {
          return elem !== " ";
        })
        .toUpperCase()
    );
  });
  console.log(name.sort().join(""));
  return name.sort((a,b) => b - a).join("");
}

module.exports = {
  createDreamTeam,
};
 
