function findMinArrowShots(points: number[][]): number {
    if(points.length <= 1) return points.length;
    points.sort((a,b) => a[0] - b[0]);

    let minS = points[0][0];
    let minE = points[0][1];
    let answer = 1;

    for(let i = 1; i < points.length; i++) {
        let nextS = points[i][0];
        let nextE = points[i][1];
        if(nextS >= minS && minE >= nextS) {
            if(minE > nextE) minE = nextE;
        } else {
            answer+=1;
            minS = nextS;
            minE = nextE;
        }
    }
    return answer;
};