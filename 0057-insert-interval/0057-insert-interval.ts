function insert(intervals: number[][], newInterval: number[]): number[][] {
    const newIntervals = [...intervals, newInterval].sort((a,b) => a[0] - b[0]);

    const answer = [];
    let start = newIntervals[0][0];
    let end = newIntervals[0][1];
    for(let i = 1; i < newIntervals.length; i++) {
        if(start <= newIntervals[i][0] && end >= newIntervals[i][0]) {
            if(end < newIntervals[i][1]) end = newIntervals[i][1];
        } else {
            answer.push([start,end]);
            start = newIntervals[i][0];
            end = newIntervals[i][1];
        }
    }
    answer.push([start, end]);
    return answer;
};