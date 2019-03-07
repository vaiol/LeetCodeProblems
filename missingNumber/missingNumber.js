/**
 * #268 #Easy
 * #gaussformula
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    let req = nums.length * (nums.length + 1) / 2;
    return req - nums.reduce((prev, num) => prev + num, 0);
};

module.exports = {
    missingNumber
};
