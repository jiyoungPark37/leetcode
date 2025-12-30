function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    let maxLeft = 0;
    let maxRight = 0;
    while(left<right) {
        // console.log(left, 'left', right, 'right', maxLeft, 'max', maxRight, 'max', max)
        if(height[left] < height[right]) {
            if(maxLeft < height[left]) {
                maxLeft = height[left];
            } else {
                max+=maxLeft-height[left];
            }
            left++;
        } else {
            if(maxRight < height[right]) {
                maxRight = height[right];
            } else {
                max+=maxRight-height[right];
            }
            right--;
        }
    }
    return max;
};