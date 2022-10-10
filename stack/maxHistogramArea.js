/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let left = leftSmallest(heights);
    let right = rightSmallest(heights);
    let width = [];
    
    for(let i = 0; i< heights.length; i++){
        width.push(right[i]-left[i]-1);
    }
    
    let ans = Number.MIN_VALUE;
    
    for(let i = 0; i< heights.length; i++){
        let temp = heights[i] * width[i];
        ans = Math.max(ans,temp)
    }

    return ans;
};

class Pairs {
    constructor(index,val){
        this.index = index;
        this.val = val;
    }
}
function leftSmallest(heights){
    let stack = [];
    let ans = [-1];
    stack.push(new Pairs(0,heights[0]))
    
    for(let i = 1; i< heights.length; i++){
        if(stack[stack.length -1].val < heights[i]){
            ans.push(stack[stack.length -1].index);
        }
        else if(stack[stack.length -1].val >= heights[i]){
            while(stack.length > 0 && stack[stack.length -1].val >= heights[i]){
                stack.pop()
            }
            if(stack.length === 0){
                ans.push(-1)
            }
            else if(stack[stack.length -1].val < heights[i]){
                ans.push(stack[stack.length -1].index);
            }
        }
        
        stack.push(new Pairs(i,heights[i]))
    }
    
    return ans
}

function rightSmallest(heights){
    let stack = [];
    let n = heights.length;
    let ans = [n];
    stack.push(new Pairs(n-1,heights[n-1]));
    
    for(let i = n-2; i>=0; i--){
        if(stack[stack.length -1].val < heights[i]){
            ans.push(stack[stack.length -1].index);
        }
        else if(stack[stack.length -1].val >= heights[i]){
            while(stack.length > 0 && stack[stack.length -1].val >= heights[i]){
                stack.pop()
            }
            if(stack.length === 0){
                ans.push(n)
            }
            else if(stack[stack.length -1].val < heights[i]){
                ans.push(stack[stack.length -1].index);
            }
        }
        
        stack.push(new Pairs(i,heights[i]))
    }
    
    return ans.reverse()
}