/**
 * @param {number} N
 * @return {boolean}
 */
const divisorGame = function (N) {
  if (N === 0 || N === 1) {
    return false;
  }

  let move = 0;

  while (N > 1) {
    for (let index = 1; index < N; index++) {
      N -= index;
      move += 1;
      break;
    }
  }
  return move % 2 === 1 ? true : false;
};
module.exports = divisorGame;
