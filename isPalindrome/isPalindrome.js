/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if(x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reverted = 0;
    while (x > reverted) {
        reverted = parseInt(reverted * 10 + x % 10);
        x = parseInt(x / 10);
    }
    return x === reverted || x === parseInt(reverted / 10);
};

module.exports = {
  isPalindrome
};
