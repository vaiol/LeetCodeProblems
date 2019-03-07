/**
 * #69 #Easy
 * #Binary search
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    if (x === 0 || x === 1) {
        return x;
    }
    let [left, right] = [1, x];
    while(left !== right) {
        const mid = left + ~~((right - left) / 2);
        if (mid * mid < x) {
            if ((mid + 1) * (mid + 1) > x) {
                return mid;
            }
            left = mid;
        } else {
            if ((mid) * (mid) === x) {
                return mid;
            }
            right = mid;
        }
    }
    return left;
};

module.exports = {
    mySqrt
};
