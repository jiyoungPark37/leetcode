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

function getMinimumDifference(root: TreeNode | null): number {
    let answer = Infinity;
    if(root === null) return 0;

    const dfs = (prev, tree) => {
        if(tree === null) return;

        for(const val of prev) {
            const abs = Math.abs(val - tree.val);
            if(answer > abs) answer = abs;
        }
        if(tree?.left) dfs([...prev, tree.val], tree.left);
        if(tree?.right) dfs([...prev, tree.val], tree.right);
    }
    dfs([root.val], root?.left);
    dfs([root.val], root?.right);
    return answer;
};