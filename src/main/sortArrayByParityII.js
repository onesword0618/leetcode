/**
 * @param {number[]} A
 * @return {number[]}
 */
module.exports = (A) => {
  let evenCount = 0;
  let oddCount = 1;
  let result = new Array(A.length);

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result[evenCount] = A[i];
      evenCount += 2;
    } else {
      result[oddCount] = A[i];
      oddCount += 2;
    }
  }
  return result;
};
