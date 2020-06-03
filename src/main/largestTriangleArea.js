/**
 * @param {number[][]} points
 * @return {number}
 */
module.exports = points => {
    const getSide = (pointA, pointB) => Math.sqrt(
        Math.abs(pointA[0] - pointB[0]) ** 2 + Math.abs(pointA[1] - pointB[1]) ** 2
    );

    const getPerimeter = (a, b, c) => 0.5 * (a + b + c);

    const getArea = (a, b, c) => {
        const P = getPerimeter(a, b, c);
        return Math.sqrt(P * (P - a) * (P - b) * (P - c));
    };

    const triangleSides = [];

    for (let i = 0; i < points.length; i++) {
        for (let j = 1; j < points.length; j++) {
            if (j < i) continue;

            for (let k = 2; k < points.length; k++) {
                if (k < j) continue;
                triangleSides.push([
                    getSide(points[i], points[j]),
                    getSide(points[j], points[k]),
                    getSide(points[k], points[i])
                ]);
            };
        };
    };

    return triangleSides.reduce((max, sides) => {
        const newArea = getArea(...sides);
        return newArea > max ? newArea : max;
    }, 0);
};