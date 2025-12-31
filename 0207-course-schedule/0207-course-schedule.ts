function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const relations = Array.from({length:numCourses}, () => []);
    const indegree = Array(numCourses).fill(0);
    const queue = [];

    for(const [next, prev] of prerequisites) {
        relations[prev].push(next);
        indegree[next]++;
    }
    indegree.forEach((ele, idx) => ele === 0 && queue.push(idx));
    while(queue.length > 0) {
        const shift = queue.shift();
        for(const course of relations[shift]) {
            if(--indegree[course] === 0) queue.push(course);
        }
    }
    return indegree.every(ele => ele === 0);
};