from typing import List


def numRookCaptures(board: List[List[str]]) -> int:
    # At first find position of rook and save in 'iR' and 'jR' variables
    iR, jR = 0, 0
    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == 'R':
                iR = i
                jR = j
    # find all first figures on line and row
    res = []
    for j in range(jR + 1, len(board)):
        if board[iR][j] != '.':
            res.append(board[iR][j])
            break
    for j in range(jR - 1, -1, -1):
        if board[iR][j] != '.':
            res.append(board[iR][j])
            break
    for i in range(iR + 1, len(board)):
        if board[i][jR] != '.':
            res.append(board[i][jR])
            break
    for i in range(iR - 1, -1, -1):
        if board[i][jR] != '.':
            res.append(board[i][jR])
            break
    # calculate how many pawns
    resCount = 0
    for i in range(len(res)):
        if res[i] == 'p':
            resCount += 1
    return resCount
