/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
module.exports = (A, B) => {
  if (A == "" || B == "" || A.length !== B.length) {
    return false;
  }

  if (A == B) {
    let set = new Set(A);
    return set.size !== A.length;
  }

  let a = "",
    b = "";

  for (i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      a += A[i];
      b += B[i];
    }
  }

  if (a.length == 2 && a.length == b.length) {
    return a[0] == b[1] && a[1] == b[0];
  }
  return false;
};
