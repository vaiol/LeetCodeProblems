/**
 * #942 #Easy
 * @param {string} str - example: DIDID
 * @return {number[]}
 */
const diStringMatch = (str) => {
    const res = [];
    let min = 0;
    let max = str.length;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'D') {
            res.push(max);
            max--;
        } else {
            res.push(min);
            min++;
        }
    }
    res.push(max);
    return res;
};

module.exports = {
    diStringMatch
};
