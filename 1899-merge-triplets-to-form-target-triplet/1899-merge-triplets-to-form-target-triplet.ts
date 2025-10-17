function mergeTriplets(triplets: number[][], target: number[]): boolean {
    let check = Array(3).fill(false);
    let count = 0;

    for(const [a,b,c] of triplets) {
        if(a > target[0] || b > target[1] || c > target[2]) continue;
        if(!check[0] && a === target[0]) {
            count+=1;
            check[0] = true;
        }
        if(!check[1] && b === target[1]) {
            check[1] = true;
            count+=1;
        }
        if(!check[2] && c === target[2]) {
            check[2] = true;
            count+=1;
        }
        if(count === 3) return true;
    }
    if(count===3) return true;
    return false;
};