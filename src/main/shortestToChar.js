/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = (S, C) => {
  const res = [];
  const pos = S.split("")
    .map((e, i) => i)
    .filter((i) => S[i] === C);

  for (let i = 0, j = 0; i < S.length; i++) {
    const nextJ = Math.min(j + 1, pos.length - 1);
    res.push(Math.min(Math.abs(i - pos[j]), Math.abs(i - pos[nextJ])));
    if (i >= pos[nextJ]) j = nextJ;
  }
  return res;
};
module.exports = shortestToChar;
