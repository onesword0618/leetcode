/**
 * @param {number} N
 * @return {number}
 */
const fib = function (N) {
  let arry = [0, 1];

  for (let i = 2; i <= N; i++) {
    arry.push(arry[i - 2] + arry[i - 1]);
  }

  return arry[N];
};
module.exports = fib;
