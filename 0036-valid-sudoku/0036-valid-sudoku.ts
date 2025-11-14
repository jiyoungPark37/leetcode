function isValidSudoku(board: string[][]): boolean {
    const set = new Set();
    const DOT = '.';

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === DOT) continue;
            const keyI = Math.floor(i / 3);
            const keyJ = Math.floor(j / 3);
            const key = `keyI:${keyI}-keyJ:${keyJ}:${board[i][j]}`;
            if(set.has(key)) return false;
            set.add(key);
        }
    }
    return true;
};