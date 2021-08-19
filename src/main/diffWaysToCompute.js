/**
 * @param {string} expression
 * @return {number[]}
 */
module.exports = diffWaysToCompute = function (expression) {
  let res = [];
  for (let i = 0; i < expression.length; i++) {
    if (isNaN(expression[i])) {
      let left = diffWaysToCompute(expression.slice(0, i));
      let right = diffWaysToCompute(expression.slice(i + 1));
      for (let l of left) {
        for (let r of right) {
          l = Number(l);
          r = Number(r);

          if (expression[i] == "+") {
            res.push(l + r);
          } else if (expression[i] == "-") {
            res.push(l - r);
          } else {
            res.push(l * r);
          }
        }
      }
    }
  }

  if (res.length != 0) return res;
  return [expression];
};
