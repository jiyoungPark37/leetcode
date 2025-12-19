function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const relations = Array.from({length: numCourses}, () => []);
    const indegree = Array(numCourses).fill(0);

    for(const [next, prev] of prerequisites) {
        indegree[next]+=1;
        relations[prev].push(next);
    }
    const queue = [];
    indegree.forEach((ele, idx) => ele === 0 && queue.push(idx));

    const answer = [];
    while(queue.length > 0) {
        const taken = queue.shift();
        answer.push(taken);
        for(const course of relations[taken]){
            if(--indegree[course] === 0) queue.push(course);
        }
    }
    return answer.length === numCourses;
}; 