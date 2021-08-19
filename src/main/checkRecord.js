/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = (s) => {
  return s.split("").filter((s) => s == "A").length <= 1 && !s.includes("LLL");
};
