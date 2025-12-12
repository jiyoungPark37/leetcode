function merge(intervals: number[][]): number[][] {
    const answer = [];
    intervals.sort((a,b) => a[0] - b[0]);

    let prev = intervals[0][0];
    let next = intervals[0][1];
    for(const [start, end] of intervals) {
        if(start <= next) {
            next = Math.max(next, end);
        } else {
            answer.push([prev, next]);
            prev = start;
            next = end;
        }
    }
    answer.push([prev, next]);
    return answer;
};