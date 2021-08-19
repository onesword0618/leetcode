/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
module.exports = checkIfCanBreak = (s1, s2) => {
  let sort1 = s1.split("").sort();
  let sort2 = s2.split("").sort();
  let bool1 = true;
  let bool2 = true;
  for (let i = 0; i < sort1.length; i++) {
    if (sort1[i] > sort2[i]) {
      bool1 = false;
    }
    if (sort1[i] < sort2[i]) {
      bool2 = false;
    }
  }
  return bool1 || bool2;
};
