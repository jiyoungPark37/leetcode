function findCircleNum(isConnected: number[][]): number {
    // 1-7
    // 1<->4, 1<->3 2<->3 5<->6 7
    // [1,0,1,1,0,0,0], [0,1,1,0,0,0,0],[1,1,1,0,0,0,0], [1,0,0,1,0,0,0],[0,0,0,0,1,1,0]
    // [0,0,0,0,1,1,0],[0,0,0,0,0,0,1]
    // [1,2,3,4,5,6,7] 
    // [1,1,1,1,5,5,7]
    const len = isConnected.length;
    const parentIdxArr = Array.from({length: len}, (_, idx) => idx);
    let count = len;
    
    const find = (idx) => {
        if(parentIdxArr[idx] === idx) return idx;
        return parentIdxArr[idx] = find(parentIdxArr[idx]);
    } 
    const union = (a,b) => {
        const rootA = find(a);
        const rootB = find(b);

        if(rootA !== rootB) {
            parentIdxArr[rootA] = rootB;
            count--;
        }
    }
    for(let i = 0; i < len; i++) {
        for(let j = i; j < len; j++) {
            if(isConnected[i][j] === 1) union(i,j);
        }
    }
    console.log(parentIdxArr, 'parentIdxArr')
    return count;
};