/**
 * @param {number} num
 * @return {boolean}
 */
const isSelfDividingNumber = (num) => {
    for (let numCopy = num; numCopy; numCopy = ~~(numCopy / 10)) {
        const digit = ~~(numCopy % 10);
        if (digit === 0) {
            return false;
        }
        if (num % digit !== 0) {
            return false;
        }
    }
    return num !== 0;
};

/**
 * #728 #Easy
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
    const res = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            res.push(i);
        }
    }
    return res;
};

module.exports = {
    selfDividingNumbers
};
