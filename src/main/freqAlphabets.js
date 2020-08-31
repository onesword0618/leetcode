/**
 * @param {string} s
 * @return {string}
 */
module.exports = s => {
    let result = '';

	for (let i = 0; i < s.length; i++) {

		if (s[i + 2] === '#') {
			result += String.fromCharCode(96 + Number(s[i] + s[i + 1]));
		} else if (s[i + 1] !== '#' && s[i] !== '#')
			result += String.fromCharCode(96 + Number(s[i]));
	}
	return result;
};