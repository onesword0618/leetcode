/**
 * @param {string} command
 * @return {string}
 */
module.exports = interpret = command => command.replace(/\(al\)/ig, 'al').replace(/\(\)/ig, 'o');