/**
 * @param {number[]} salary
 * @return {number}
 */
module.exports = average = function (salary) {
  return (
    salary
      .sort((a, b) => a - b)
      .slice(1, salary.length - 1)
      .reduce((acc, cur) => acc + cur) /
    (salary.length - 2)
  );
};
