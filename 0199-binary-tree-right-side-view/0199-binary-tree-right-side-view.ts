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

function rightSideView(root: TreeNode | null): number[] {
    const answer = [];
    if(root === null) return answer;
    let queue = [root];

    while(queue.length) {
        let len = queue.length;
        let curMax = 0;
        for(let i = 0; i < len; i++) {
            const shifted = queue.shift();
            if(shifted.left !== null) queue.push(shifted.left);
            if(shifted.right !== null) queue.push(shifted.right);
            if(i === len - 1) curMax = shifted.val;
        }
        answer.push(curMax);
    }
    return answer;
};