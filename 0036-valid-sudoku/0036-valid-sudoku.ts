function isValidSudoku(board: string[][]): boolean {
    const set = new Set();
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === '.') continue;
            const colKey = `i:${i}:${board[i][j]}`;
            const rowKey = `j:${j}:${board[i][j]}`;
            const rowColKey = `i:${Math.floor(i/3)}-j:${Math.floor(j/3)}:${board[i][j]}`;
            if(set.has(colKey) || set.has(rowKey) || set.has(rowColKey)) return false;
            set.add(colKey);
            set.add(rowKey);
            set.add(rowColKey);
        }
    }
    return true;
};