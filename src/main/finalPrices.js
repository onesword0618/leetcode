/**
 * @param {number[]} prices
 * @return {number[]}
 */
module.exports = prices => {
    return prices.map((price, i) => price - (prices[prices.findIndex((p, j) => i < j && p <= price)] || 0),);
};