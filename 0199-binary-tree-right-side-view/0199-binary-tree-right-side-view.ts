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

    const queue = [root];
    while(queue.length > 0) {
        const len = queue.length;
        let val;
        for(let i = 0; i < len; i++) {
            const first = queue.shift();
            if(first?.val != undefined) {
                val = first.val;
                if(first?.left) queue.push(first.left)
                if(first?.right) queue.push(first.right)
            }
        }
        if(val != undefined) answer.push(val);
    }
    return answer;
};