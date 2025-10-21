function networkDelayTime(times: number[][], n: number, k: number): number {
    const graph: number[][][] = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    const dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;

    const pq: [number, number][] = [[k, 0]]; 

    while (pq.length) {
        pq.sort((a, b) => a[1] - b[1]); 
        const [node, time] = pq.shift();

        if (time > dist[node]) continue;

        for (const [next, weight] of graph[node]) {
            const newTime = time + weight;
            if (newTime < dist[next]) {
                dist[next] = newTime;
                pq.push([next, newTime]);
            }
        }
    }

    const maxTime = Math.max(...dist.slice(1));
    return maxTime === Infinity ? -1 : maxTime;
}
