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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const answer = [];
    if(root === null) return answer;

    const queue = [root];
    let curLevel = 0;
    while(queue.length > 0) {
        const len = queue.length;
        const res = [];
        for(let i = 0; i < len; i++) {
            const first = queue.shift();
            res.push(first.val);

            if(first?.left) queue.push(first.left);
            if(first?.right) queue.push(first.right);
        }
        if(res.length > 0) {
            if(curLevel % 2 !== 0) res.reverse();
            answer.push(res);
        }
        curLevel+=1;
    }
    return answer;
};