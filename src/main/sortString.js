/**
 * @param {string} s
 * @return {string}
 */
module.exports = (s) => {
  const cnts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    cnts[s.charCodeAt(i) - 97]++;
  }
  const res = new Array(Math.max(...cnts)).fill("");

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < cnts[i]; j++) {
      if (0 === j % 2) {
        res[j] += String.fromCharCode(i + 97);
      } else {
        res[j] = String.fromCharCode(i + 97) + res[j];
      }
    }
  }
  return res.join("");
};
