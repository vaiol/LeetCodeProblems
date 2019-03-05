/**
 * #11 Medium
 * Brute force solution
 * TODO Learn second solution two pointers
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            const tmp = Math.abs(i - j) * Math.min(height[i], height[j]);
            if (tmp > max) {
                max = tmp;
            }
        }
    }
    return max;
};

module.exports = {
    maxArea
};
