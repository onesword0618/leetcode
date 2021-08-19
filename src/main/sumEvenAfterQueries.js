/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
module.exports = (A, queries) => {
  let evenSum = A.reduce((acc, cur) => acc + (cur % 2 ? 0 : cur), 0);

  return queries.map(([val, idx]) => {
    if (A[idx] % 2 === 0) {
      evenSum -= A[idx];
    }

    A[idx] += val;

    if (A[idx] % 2 === 0) {
      evenSum += A[idx];
    }
    return evenSum;
  });
};
