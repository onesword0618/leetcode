/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = halvesAreAlike = (s) => {
  let arr1 = s.substring(0, s.length / 2).split("");
  let arr2 = s.substring(s.length / 2, s.length).split("");
  const leftLength = arr1.filter((x) => "aeiouAEIOU".indexOf(x) > -1).length;
  const rightLength = arr2.filter((x) => "aeiouAEIOU".indexOf(x) > -1).length;
  return leftLength === rightLength;
};
