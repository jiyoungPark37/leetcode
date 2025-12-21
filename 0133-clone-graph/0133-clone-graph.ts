/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
	if(!node) return node;

    const queue = [];
    const map = new Map();
    const cloneNode = new _Node(node.val);
    map.set(node, cloneNode);
    queue.push(node);
    while(queue.length > 0) {
        const original = queue.shift();
        const cloneNode = map.get(original);

        for(const neighbor of original.neighbors) {
            if(!map.has(neighbor)) {
                const cloneNeighbor = new _Node(neighbor.val);
                map.set(neighbor, cloneNeighbor);
                queue.push(neighbor);
            }
            cloneNode.neighbors.push(map.get(neighbor));
        }
    }
    return cloneNode;
};