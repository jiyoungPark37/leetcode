function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0]);
    const answer = [];

    let start = intervals[0][0];
    let end = intervals[0][1];
    for(const [a,b] of intervals) {
        if(end >= a) {
            end = Math.max(end, b);
        } else {
            answer.push([start, end]);
            start = a;
            end = b;
        }
    }
    answer.push([start,end])
    return answer;
};