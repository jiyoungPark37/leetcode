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

function countNodes(root: TreeNode | null): number {
    let count = 0;
    if(root === null) return count;
    const queue = [root];
    while(queue.length > 0) {
        const first = queue.shift();
        count++;
        if(first?.left) queue.push(first.left);
        if(first?.right) queue.push(first.right);
    }
    return count;
};