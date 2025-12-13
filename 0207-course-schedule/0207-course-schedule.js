/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const queue = [];
    let answer = [];
    const indegrees = Array(numCourses).fill(0);
    const relations = Array.from(Array(numCourses), () => Array());
    
    if(prerequisites.length === 0) return true;
    for(const [a,b] of prerequisites) {
        indegrees[a]++;
        relations[b].push(a);
    }
    for(let i = 0; i < indegrees.length; i++){
        if(indegrees[i] === 0) queue.push(i);
    }
    while(queue.length) {
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let x = queue.shift();
            answer.push(x);
            for(const nx of relations[x]){
                if(--indegrees[nx] === 0) queue.push(nx);
            }
        }
    }
    if(answer.length === numCourses) return true;
    return false;
};