/**
 * @param {number} n
 * @return {number}
 */
module.exports = (n) => {

    const getTrib = (num, map) => {

        if (num == 0) {
            return 0;
        };

        if (num == 1 || num == 2) {
            return 1;
        };

        if (map[num] == null) {
            map[num] = getTrib(num - 1, map) + getTrib(num - 2, map) + getTrib(num - 3, map);
        };
        return map[num];
    };

    return getTrib(n, []);
};