/**
 * @param {number[]} piles
 * @return {number}
 */
module.exports = maxCoins = function (piles) {
  let res = 0;
  piles.sort((a, b) => a - b);
  for (let i = piles.length - 2; i >= piles.length / 3; i -= 2) {
    res += piles[i];
  }
  return res;
};
