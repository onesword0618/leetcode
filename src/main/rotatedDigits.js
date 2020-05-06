/**
 * @param {number} N
 * @return {number}
 */
module.exports = N => {

    let result = 0;

    for (let i = 1; i <= N; i++) {
        let currInt = i.toString().replace(/[0,1,8]/g, '');

        if (currInt.length === 0) {
            continue;
        };

        if (currInt.replace(/[2,5,6,9]/g, '').length === 0) {
            result++;
        };
    };

    return result;
};