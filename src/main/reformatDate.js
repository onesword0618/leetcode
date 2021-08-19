/**
 * @param {string} date
 * @return {string}
 */
module.exports = (date) => {
  return new Date(Date.parse(date.replace(/.. /, "")))
    .toISOString()
    .slice(0, 10);
};
