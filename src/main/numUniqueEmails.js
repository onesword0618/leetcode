/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
  let invalidMailFormatTrim = function (email) {
    let result = "";
    let ignore = false;
    let domain = false;

    for (let index = 0; index < email.length; index++) {
      if (email[index] === "@") {
        domain = true;
      }

      if (email[index] === "+") {
        ignore = true;
      }

      if ((!ignore && email[index] !== ".") || domain) {
        result += email[index];
      }
    }
    return result;
  };
  return new Set(emails.map((email) => invalidMailFormatTrim(email))).size;
};
module.exports = numUniqueEmails;
