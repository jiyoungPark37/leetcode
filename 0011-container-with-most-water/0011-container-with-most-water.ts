function maxArea(height: number[]): number {
    let answer = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        answer = Math.max(answer, (right - left) * Math.min(height[left], height[right]));
        if(height[left] < height[right]) left += 1;
        else right -= 1;
    }
    return answer;
};