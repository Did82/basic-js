const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  let dreamTeam = [];
  members.forEach((element) => {
    if (typeof element === "string") dreamTeam.push(element.trim().charAt(0).toUpperCase());
});
  return dreamTeam.sort().join('');
};
