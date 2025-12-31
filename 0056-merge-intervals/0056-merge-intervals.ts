function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0]);
    let start = intervals[0][0]
    let end = intervals[0][1];
    const answer = [];
    for(const [a,b] of intervals) {
        if(a <= end) {
            end = Math.max(end, b);
        } else {
            answer.push([start, end]);
            start = a;
            end = b;
        }
    }
    answer.push([start, end]);
    return answer;
};