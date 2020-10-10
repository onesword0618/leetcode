/**
 * @param {string[]} ops
 * @return {number}
 */
module.exports = ops => {
    let lastPoints = [];

    ops.forEach(op => {
        if (op === 'C') {
            lastPoints.pop();
        } else if (op === 'D') {
            const points = lastPoints[lastPoints.length - 1] * 2
            lastPoints.push(points)
        } else if (op === '+') {
            if (lastPoints.length === 1) {
                let points = lastPoints[lastPoints.length - 1]
                lastPoints.push(points)
            } else {
                let points = lastPoints[lastPoints.length - 1] + lastPoints[lastPoints.length - 2]
                lastPoints.push(points)
            }
        } else {
            const points = parseInt(op);
            lastPoints.push(points);
        }
    })

    return lastPoints.reduce((acc, curr) => {
        return acc += curr;
    }, 0);
};