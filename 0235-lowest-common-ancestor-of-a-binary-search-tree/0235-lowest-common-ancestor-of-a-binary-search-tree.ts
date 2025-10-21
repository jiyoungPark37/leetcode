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
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(!p || !q || !root) return null;
    if(p.val === root.val || q.val === root.val) return root;
    if((p.val > root.val && q.val < root.val) || (p.val < root.val && q.val > root.val)) return root;

    let answer = root;
    const dfs = (tree: TreeNode | null) => {
        if(tree == null) return;

        answer = tree;
        if(tree.val === p.val || tree.val === q.val || (tree.val > p.val && tree.val < q.val) || (tree.val < p.val && tree.val > q.val)) {
            return;
        }
        if(tree.val < p.val && tree.val < q.val) {
            if(tree.right) dfs(tree.right);
        }
        if(tree.val > p.val && tree.val > q.val) {
            if(tree.left) dfs(tree.left);
        }
    }
    dfs(root);
    return answer;
};