/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let answer = 0;
    const check = Array(isConnected.length).fill(0);
    const relations = Array.from(Array(isConnected.length), () => Array());
    
    for(let i = 0; i < isConnected.length; i++){
        for(let j = 0; j < isConnected[0].length; j++){
            if(isConnected[i][j] === 1) relations[i].push(j);
        }
    }
    
    const dfs = (x) => {
        for(const nx of relations[x]){
            if(check[nx] === 0) {
                check[nx] = 1;
                dfs(nx);
            }
        }
    }
    
    for(let i = 0; i < check.length; i++){
        if(check[i] === 0){
            check[i] = 1;
            dfs(i);
            answer++;
        }
    }
    return answer;
};