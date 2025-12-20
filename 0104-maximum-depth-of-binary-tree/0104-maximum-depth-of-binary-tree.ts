/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    if(root === null) return 0;

    let level = 0;
    const queue = [root];
    while(queue.length > 0) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const first = queue.shift();
            if(first?.left) queue.push(first.left);
            if(first?.right) queue.push(first.right);
        }
        level+=1;
    }
    return level;
};