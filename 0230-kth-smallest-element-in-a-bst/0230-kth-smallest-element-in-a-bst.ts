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
    if(root === null) return 0;
    
    const arr = [];
    
    const traverse = (tree:TreeNode | null) => {
        if(tree === null) return;

        arr.push(tree.val);
        if(tree?.left) traverse(tree.left);
        if(tree?.right) traverse(tree.right);
    }
    traverse(root);
    arr.sort((a,b) => a - b);
    return arr[k-1] ?? 0;
};