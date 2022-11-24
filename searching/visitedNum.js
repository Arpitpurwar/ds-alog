function containsDuplicate(nums) {
  const visitedNums = {}; // {7: true, 2: true}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (visitedNums[num]) {
      return true;
    } else {
      visitedNums[num] = true;
    }
  }

  return false;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(arr1)); //returns false
console.log(containsDuplicate(arr2)); //returns true
