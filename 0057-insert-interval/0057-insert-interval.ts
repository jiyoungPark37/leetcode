function insert(intervals: number[][], newInterval: number[]): number[][] {
    const newIntervals = [...intervals, newInterval].sort((a,b) => a[0] - b[0]);

    const answer = [];
    let start = newIntervals[0][0]
    let end = newIntervals[0][1]
    for(const [a,b] of newIntervals) {
        if(end >= a) {
            end = Math.max(end, b);
        }  else {
            answer.push([start, end]);
            start = a;
            end = b;
        }
    }
    answer.push([start, end]);
    return answer;
};