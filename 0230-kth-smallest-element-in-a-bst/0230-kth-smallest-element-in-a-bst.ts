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

function kthSmallest(root: TreeNode | null, k: number): number {
    const answer = [];

    const dfs = (tree: TreeNode | null) => {
        if(tree === null) return;
       
        answer.push(tree.val);
        answer.sort((a,b) => a - b);

        if(tree?.left) dfs(tree.left);
        if(tree?.right) dfs(tree.right);
    }
    dfs(root);
    return answer[k-1];
};