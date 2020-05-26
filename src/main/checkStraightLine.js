/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
module.exports = coordinates => {

    if (coordinates.length === 2) {
        return true;
    };

    if (coordinates.every(el => el[0] === coordinates[0][0])
        || coordinates.every(el => el[1] === coordinates[0][1])) {

        return true;
    };

    for (let i = 2; i < coordinates.length; i++) {

        if (!((coordinates[i][0] - coordinates[0][0]) / (coordinates[1][0] - coordinates[0][0])
            === (coordinates[i][1] - coordinates[0][1]) / (coordinates[1][1] - coordinates[0][1]))) {
            return false;
        };
    };
    return true;
};