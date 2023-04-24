var threeSumClosest = function(nums, target) {
 
    nums = nums.sort((a,b) => a-b);
 
    let min = Infinity; //just to store the minimum difference
    let result = 0;     //to store the closest sum
 
    for(let i = 0; i < nums.length - 2; i++){
        let left = i+1;
        let right = nums.length - 1;
 
        while(left < right){
 
            //since exactly one solution, we can return
            if(nums[i] + nums[left] + nums[right] === target){
                return target; //same as returning (nums[i] + nums[left] + nums[right])
            }else if(min > Math.abs(nums[i] + nums[left] + nums[right] - target)){
                min = Math.abs(nums[i] + nums[left] + nums[right] - target);
                result = nums[i] + nums[left] + nums[right];
            }
 
            if(nums[i] + nums[left] + nums[right] > target)
                right--;
            else
                left++;
        }
    }
    return result;
};
 

// const inp = readline().split(' ').map(item => parseInt(item));
// const target = parseInt(readline());

const inp = [0,0,0];
const target = 1
console.log(threeSumClosest(inp, target));