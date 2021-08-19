/**
 * @param {string[]} A
 * @return {number}
 */
module.exports = minDeletionSize = function (A) {
  let deletions = 0;
  for (let index = 0; index < A[0].length; index++) {
    for (var i = 0; i < A.length - 1; i++) {
      if (A[i].charAt(index) > A[i + 1].charAt(index)) {
        deletions++;
        break;
      }
    }
  }
  return deletions;
};
