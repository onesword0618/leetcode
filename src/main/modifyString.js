/**
 * @param {string} s
 * @return {string}
 */
module.exports = modifyString = function (s) {
    const [len, match] = [s.length, '?'.charCodeAt(0)]
    let [res, before, after] = ['']

    for (let i = 0; i < len; i++) {
        if (s.charCodeAt(i) !== match) res += s[i]
        else {
            if (res[i - 1]) before = res.charCodeAt(i - 1)
            if (s[i + 1]) after = s.charCodeAt(i + 1)

            for (let i = 97; i <= 122; i++) {
                if (i !== before && i !== after) {
                    res += String.fromCharCode(i)
                    break
                }
            }
        }
    }
    return res
};