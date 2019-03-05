/**
 * #977 #Easy
 * Time: O(N)
 * Memo: O(N)
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = (A) => {
    const res = [];
    let i = 0;
    while (A[i] < 0) {
        i++;
    }
    let j = i - 1;
    while(j >= 0 || i < A.length) {
        if (j >= 0 && i < A.length) {
            if (A[i] < (-A[j])) {
                res.push(Math.pow(A[i], 2));
                i++;
            } else {
                res.push(Math.pow(A[j], 2));
                j--;
            }
        } else if (i < A.length) {
            res.push(Math.pow(A[i], 2));
            i++;
        } else if (j >= 0) {
            res.push(Math.pow(A[j], 2));
            j--;
        }
    }
    return res;
};

/**
 * Time: O(N log N)
 * Memo: O(N)
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquaresFunc = (A) => A.map(num => Math.pow(num, 2)).sort((a, b) => a < b ? -1 : 1);

module.exports = {
    sortedSquares,
    sortedSquaresFunc
};
