/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
module.exports = (A, B) => {
  let concatArray = A.split(" ").concat(B.split(" "));
  let result = [];
  let duplicates = [];

  concatArray.forEach((element, index) => {
    if (concatArray.indexOf(element, index + 1) === -1) {
      result.push(element);
    } else {
      duplicates.push(element);
    }
  });

  return result.filter((element) => !duplicates.includes(element));
};
