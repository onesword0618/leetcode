/**
 * @param {number[]} A
 * @return {number[]}
 */
module.exports = sortArrayByParity = function (A) {
  return [
    ...A.filter((elem) => elem % 2 === 0),
    ...A.filter((elem) => elem % 2),
  ];
};
