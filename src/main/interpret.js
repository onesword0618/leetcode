/**
 * @param {string} command
 * @return {string}
 */
module.exports = interpret = (command) =>
  command.replace(/\(al\)/gi, "al").replace(/\(\)/gi, "o");
