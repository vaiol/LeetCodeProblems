
const maxArea = (height) => {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            const tmp = Math.abs(i - j) * Math.min(height[i], height[j]);
            if (tmp > max) {
                max = tmp;
            }
        }
    }
    return max;
};

module.exports = {
    maxArea
};

const findNearestIsland = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid.length) {
        return 0;
    }
    let res = 0;
    res += findIslandSize(grid, i + 2, j);
    res += findIslandSize(grid, i + 1, j + 1);
    res += findIslandSize(grid, i - 1, j + 1);
    res += findIslandSize(grid, i - 1, j - 1);
    res += findIslandSize(grid, i + 1, j - 1);
    res += findIslandSize(grid, i - 2, j);
    res += findIslandSize(grid, i, j + 2);
    res += findIslandSize(grid, i, j - 2);
    return res;
};

const findIslandSize = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid.length || !grid[i][j]) {
        return 0;
    }
    grid[i][j] = 0;
    const results = [
        findIslandSize(grid, i + 1, j),
        findIslandSize(grid, i - 1, j),
        findIslandSize(grid, i, j + 1),
        findIslandSize(grid, i, j - 1)
    ];
    const islands = [];
    for (const res of results) {
        islands.push(...res.islands);
    }
    const islands = results.map(item => item.islands);
    islands.push(findNearestIsland(grid, i, j));
    return { res, islands };
};


/**
 * TODO NOT DONE
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = (grid) => {
    let biggest = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            const island = findIslandSize(grid, i, j);
            if (biggest < island) {
                biggest = island;
            }
        }
    }
    return biggest < (grid.length * grid.length) ? biggest + 1 : biggest;
};
