/**
 * #883 #Easy
 * Time: O(N^2)
 * Memo: O(1)
 * Example:
 * Input: [[1,2],[3,4]]
 * Output: 17
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = (grid) => {
    let xy = 0;
    let zx = 0;
    let zy = 0;
    for (let i = 0; i < grid.length; i++) {
        let maxZX = 0;
        let maxZY = 0;
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j]) {
                xy += 1;
            }
            if (maxZX < grid[i][j]) {
                maxZX = grid[i][j];
            }
            if (maxZY < grid[j][i]) {
                maxZY = grid[j][i];
            }
        }
        zx += maxZX;
        zy += maxZY;
    }
    return zy + zx + xy;
};

module.exports = {
    projectionArea
};
