function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let answer = 0;

    while(left<right) {
        if(height[left] < height[right]) {
            if(maxLeft < height[left]) maxLeft = height[left];
            else answer+=maxLeft-height[left];
            left++;
        } else {
            if(maxRight < height[right]) maxRight = height[right];
            else answer+=maxRight-height[right];
            right--;
        }
    }
    return answer;
};