/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars =(A) => {
    const res = A[0].split("");
    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < res.length; j++) {
            let str = A[i];
            const index = str.indexOf(res[j]);
            if (index === -1) {
                res[j] = null;
            }
            str = str.substr(0, index) + str.substr(index + 1);
            A[i] = str;
        }
    }
    return res.filter(ch => ch);
};

module.exports = {
  commonChars
};
