function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const answer = [];
    const indegree = Array(numCourses).fill(0);
    const relations = Array.from({length: numCourses}, () => []);
    const queue = [];

    for(const [next, pre] of prerequisites) {
        relations[pre].push(next);
        indegree[next]++;
    }
    indegree.forEach((ele, idx) => ele === 0 && queue.push(idx));
    while(queue.length > 0) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const first = queue.shift();
            answer.push(first);
            for(const course of relations[first]) {
                if(--indegree[course] === 0) queue.push(course);
            }
        }
    }
    return indegree.every(ele => ele === 0) ? answer : [];
};