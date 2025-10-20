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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if(root == null) return 0;
    let max = 0;

    const reverse = (tree: TreeNode | null) => {
        if(tree == null) return 0;

        const left = reverse(tree?.left);
        const right = reverse(tree?.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    reverse(root);
    return max;
};