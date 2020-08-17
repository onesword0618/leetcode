/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
module.exports = (date1, date2) => {
    const base = new Date(date1).getTime();
    const compare = new Date(date2).getTime();
    return Math.round(Math.abs(base - compare) / (1000*60*60*24));
};