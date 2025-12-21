function findCircleNum(isConnected: number[][]): number {
    let answer = isConnected.length;
    const arr = Array.from({length: answer}, (_, idx) => idx);

    const find = (i) => {
        if(arr[i] === i) return i;
        return arr[i] = find(arr[i]);
    }
    const union = (a,b) => {
        const rootA = find(a);
        const rootB = find(b);

        if(rootA !== rootB) {
            answer-=1;
            arr[rootA] = rootB;
        }
    }
    for(let i = 0; i < isConnected.length; i++) {
        for(let j = 0; j < isConnected.length; j++) {
            if(isConnected[i][j] === 1) {
                union(i, j);
            }
        }
    }
    return answer;
};