/**
 * @param {number} num
 * @return {string}
 */
module.exports = (num) => {
  let arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  if (num == 0) return "0";

  if (num < 0) {
    num += Math.pow(2, 32);
  }
  var res = "";

  while (num > 0) {
    var digit = num % 16;
    res = arr[digit] + res;
    num = Math.floor(num / 16);
  }
  return res;
};
