/**
 * @param {number[]} point
 * @return {number}
 */
const euclideanDistance = (point) => {
    // const a = Math.pow(point1[0] - point2[0], 2);
    // const b = Math.pow(point1[1] - point2[1], 2);
    // return Math.sqrt(a + b);
    // return a + b;
    return point[0] * point[0] + point[1] * point[1];
};

/**
 * #973 #Easy #euclidean
 * TODO Work! Second method!
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = (points, K) => {
    // const res = [];
    // for (let i = 0; i < points.length; i++) {
    //     res.push({ point: points[i], distance: euclideanDistance(points[i]) });
    // }
    // return res.sort((a, b) => a.distance > b.distance ? 1: -1).map(item => item.point).slice(0, K);
    return points
        .map(item => ({ point: item, distance: euclideanDistance(item) }))
        .sort((a, b) => a.distance > b.distance ? 1: -1)
        .map(item => item.point)
        .slice(0, K);
};

module.exports = {
    kClosest
};
