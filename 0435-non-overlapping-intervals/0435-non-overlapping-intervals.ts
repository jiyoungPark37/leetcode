function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b) => a[1] - b[1]);
    let tmp = intervals[0][1];
    let answer = 0;
    for(let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        if(start >= tmp) {
            tmp = end;
        } else {
            answer++;
        }
    };
    return answer;
};