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

function levelOrder(root: TreeNode | null): number[][] {
    if(root === null) return [];

    const answer = [];
    const queue = [root];
    while(queue.length > 0) {
        const len = queue.length;
        const res = [];
        for(let i = 0; i < len; i++) {
            const shift = queue.shift();
            res.push(shift.val);
            if(shift?.left) queue.push(shift.left);
            if(shift?.right) queue.push(shift.right);
        }
        answer.push(res.slice());
    }
    return answer;
};