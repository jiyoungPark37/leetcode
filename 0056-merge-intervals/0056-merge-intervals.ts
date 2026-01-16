function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0]);

    const answer = [intervals[0]];
    for(let i = 1; i < intervals.length; i++) {
        const [start,end] = intervals[i];
        let prevEnd = answer[answer.length - 1][1];
        if(prevEnd >= start) answer[answer.length - 1][1] = Math.max(end, prevEnd);
        else {
            answer.push([start, end]);
        }
    }
    return answer;
};