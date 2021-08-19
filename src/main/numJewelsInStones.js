/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
module.exports = (J, S) => {
  const jewels = new Set(J);
  return S.split("").reduce((res, s) => res + jewels.has(s), 0);
};
