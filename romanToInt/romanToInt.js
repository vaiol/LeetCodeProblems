/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const ROMAN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const arr = s.split("").map(ch => ROMAN[ch]);
    if (arr.length === 1) {
        return arr[0];
    }
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            res += arr[i];
            break;
        }
        if (arr[i] >= arr[i + 1]) {
            res += arr[i];
        } else {
            res -= arr[i]
        }
    }
    return res;
};

module.exports = {
    romanToInt
}
