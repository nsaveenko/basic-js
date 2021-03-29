const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) { 
    return false; 
  }

  let names = [];
  let result = [];

  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
          names.push(members[i].trim());
      } 
  }

  for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i][0];
    result.push(firstLetter.toUpperCase());
  }

  return result.sort().join('');
};
