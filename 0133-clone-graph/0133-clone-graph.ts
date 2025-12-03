/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */
const dfs = (node: Node | null, memo: Map<Node, Node>) => {
    if(!node) return;

    if(memo.has(node)) return memo.get(node);

    const newNode = new Node(node.val);
    memo.set(node, newNode);

    for(let i = 0; i < node.neighbors.length; i++) {
        newNode.neighbors.push(dfs(node.neighbors[i], memo))
    };
    return newNode;
};

function cloneGraph(node: Node | null): Node | null {
    let memo: Map<Node, Node> = new Map();

    return dfs(node, memo);
};