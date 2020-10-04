/**
 * @param {string[]} words
 * @return {string[]}
 */
module.exports = words => {
    const res = [];
    for (let word of words) {
        let i = 0;
        while (i < words.length) {
            if (words[i] !== word && words[i].includes(word)
                && !res.includes(word)) res.push(word);
            i++;
        }
    }
    return res;
};