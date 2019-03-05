/**
 * @param {number[]} arr
 * @return {number[]}
 */
const reverseAndInvert = (arr) => {
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        const tmp = arr[i] ? 0 : 1;
        arr[i] = arr[j] ? 0 : 1;
        arr[j] = tmp;
    }
    return arr;
};

/**
 * #832 #Easy
 * Time: O(N)
 * Memo: O(1)
 * @param {number[][]} arr
 * @return {number[][]}
 */
const flipAndInvertImage = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = reverseAndInvert(arr[i]);
    }
    return arr;
};

module.exports = {
    flipAndInvertImage
};
