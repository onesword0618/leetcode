/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
module.exports = (distance, start, destination) => {
    return destination < start ?
        distanceBetweenBusStops(distance, destination, start) :
        Math.min(
            distance.slice(start, destination).reduce((acc, curr) => acc + curr, 0),
            distance
            .concat(distance)
            .slice(destination, start + distance.length)
            .reduce((acc, curr) => acc + curr, 0), );
};