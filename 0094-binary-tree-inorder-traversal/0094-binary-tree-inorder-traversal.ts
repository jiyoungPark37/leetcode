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

function inorderTraversal(root: TreeNode | null): number[] {
    const res = [];

    const traverse = (tree: TreeNode | null) => {
        if(!tree) return;
        if(tree.left) traverse(tree.left);
        res.push(tree.val);
        if(tree.right) traverse(tree.right);
    }
    traverse(root);
    return res;
};