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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(preorder.length < 1 || inorder.length < 1) return null;

    const tree = new TreeNode(preorder[0]);
    const idx = inorder.findIndex(num => num === preorder[0]);
    tree.left = buildTree(preorder.slice(1, idx+1), inorder.slice(0,idx));
    tree.right = buildTree(preorder.slice(idx+1), inorder.slice(idx+1));
    return tree;
};