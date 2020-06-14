/**
 * @param {number[]} bills
 * @return {boolean}
 */
module.exports = lemonadeChange = function (bills) {
    let money5 = 0;
    let money10 = 0;

    for (i = 0; i < bills.length; i++) {

        if (bills[i] === 5) {
            money5++;
        } else if (bills[i] === 10) {
            money10++;
            money5--;

            if (money5 < 0) {
                return false;
            };
        } else if (bills[i] === 20) {
            money5--;
            if (money10 > 0) {
                money10--;
            } else {
                money5 -= 2
            };
            if (money10 < 0 || money5 < 0) {
                return false
            };
        };
    };
    return true;
};