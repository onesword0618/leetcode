/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
module.exports = (S, T) => {
  for (let i = 0; i < S.length; ) {
    if (S[i] == "#") {
      S = S.substr(0, i - 1) + S.substr(i + 1, S.length);
      i--;
    } else {
      i++;
    }
  }

  for (let i = 0; i < T.length; ) {
    if (T[i] == "#") {
      T = T.substr(0, i - 1) + T.substr(i + 1, T.length);
      i--;
    } else {
      i++;
    }
  }

  return S === T;
};
