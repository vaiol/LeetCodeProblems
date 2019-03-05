/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) => {
    const res = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            res.push(A[i]);
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 !== 0) {
            res.push(A[i]);
        }
    }
    return res;
};

module.exports = {
    sortArrayByParity
};
