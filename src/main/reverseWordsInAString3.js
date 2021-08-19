/**
 * @param {string} s
 * @return {string}
 */
const reverseWordsInAString3 = function (s) {
  let str = s.split(" ");

  for (let index = 0; index < str.length; index++) {
    str[index] = str[index].split("").reverse().join("");
  }

  return str.join(" ");
};
module.exports = reverseWordsInAString3;
